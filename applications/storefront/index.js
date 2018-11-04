/**
 *  Storefront
 */
const express = require('express');
const fetch = require('node-fetch');
const path = require("path");
const { gateways, pages } = require('./config');

const app = express();

const fragmentParserRegex = /<fragment from="(.*?)" name="(.*?)"><\/fragment>/gim;

const pageRenderer = (page) => {
  const fragments = [];
  let match = fragmentParserRegex.exec(page.html);

  while(match){
    fragments.push({
      gateway: gateways[match[1]],
      name: match[2],
      replacement: match[0]
    });
    match = fragmentParserRegex.exec(page.html);
  }

  return async (req, res) => {
    let response = page.html;

    await Promise.all(fragments.map(async fragment => {
      return fetch(`${fragment.gateway}/${fragment.name}${req.url.replace(`${page.name}/`,'')}`)
        .then(async res => {
          response = response.replace(fragment.replacement, await res.text())
        });
    }));

    res.end(response);
  }
};

pages.forEach(page => {
  app.get(page.url, pageRenderer(page))
});

app.use('/', express.static(path.join(__dirname, 'static')));

const PORT = 8080;


app.listen(PORT, () => console.log(`Storefront listening on port ${PORT}!`));
