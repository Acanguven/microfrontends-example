/**
 *  Browsing
 */
const express = require('express');
const app = express();
const PORT = 3002;

const productListTemplate = `
  <div>
    <ul>
        <li><a href="/product/1">Product 1</a></li>
        <li><a href="/product/2">Product 2</a></li>
        <li><a href="/product/3">Product 3</a></li>
    </ul>
  </div>
`;

app.get('/product-list', (req, res) => res.send(productListTemplate));
app.get('/product/:id', (req, res) => res.send(`<div>Product info for id: ${req.params.id}</div>`));

app.listen(PORT, () => console.log(`Browsing listening on port ${PORT}!`));
