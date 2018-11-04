/**
 *  Browsing
 */
const express = require('express');
const app = express();
const PORT = 3002;

const productListTemplate = `
  <div style="padding: 20px;border:1px solid #ccc;">
    <ul>
        <li class="product-box"><a href="/product/1">Product 1</a> <small>Description of product 1</small></li>
        <li class="product-box"><a href="/product/2">Product 2</a> <small>Description of product 1</small></li>
        <li class="product-box"><a href="/product/3">Product 3</a> <small>Description of product 1</small></li>
    </ul>
  </div>
`;

const header = `
  <div class="header">
    <a href="#default" class="logo">Micro Frontends</a>
    <div class="header-right">
      <a class="" href="/">Home</a>
      <a href="/product/2">Best Seller</a>
    </div>
  </div>
`;

app.get('/product-list', (req, res) => res.send(productListTemplate));
app.get('/header/*', (req, res) => res.send(header));
app.get('/product/:id', (req, res) => res.send(`<div style="padding: 20px;border:1px solid #ccc;">Product information for id: ${req.params.id}</div>`));

app.listen(PORT, () => console.log(`Browsing listening on port ${PORT}!`));
