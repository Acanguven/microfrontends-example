/**
 *  Storefront
 */
const express = require('express');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const app = express();

const gateways = {
  account: 'http://localhost:3001',
  browsing: 'http://localhost:3002',
  checkout: 'http://localhost:3003',
  search: 'http://localhost:3004',
};

const pages = [
  {
    name: 'homepage',
    url: '/',
    html: fs.readFileSync(path.join(__dirname, './pages/home.html'), 'utf8')
  },
  {
    name: 'product',
    url: '/product/:id',
    html: fs.readFileSync(path.join(__dirname, './pages/product.html'), 'utf8')
  }
];

const fragmentParserRegex = /fragment from="(.*?)" name="(.*?)"/gim;

const pageRenderer = (page) => {
  const fragments = [];
  let match = fragmentParserRegex.exec(page.html);

  while(match){
    fragments.push({
      gateway: gateways[match[1]],
      name: match[2]
    });
    match = fragmentParserRegex.exec(page.html);
  }

  return async (req, res) => {
    const fragmentResponses = await Promise.all(fragments.map(async fragment => {
      return fetch(`${fragment.gateway}/${fragment.name}${req.url.replace(`${page.name}/`,'')}`)
        .then(res => res.text());
    }));

    res.end(fragmentResponses.join(''));
  }
};

pages.forEach(page => {
  app.get(page.url, pageRenderer(page))
});

const PORT = 8080;


app.listen(PORT, () => console.log(`Storefront listening on port ${PORT}!`));
