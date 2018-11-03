const fs = require('fs');
const path = require('path');

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

module.exports = {
  gateways,
  pages
};
