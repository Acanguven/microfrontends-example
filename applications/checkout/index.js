/**
 *  Checkout
 */
const express = require('express');
const app = express();
const PORT = 3003;

app.get('/basket', (req, res) => res.send('<div style="padding: 20px;border:1px solid #ccc;">Checkout from Checkout Gateway</div>'));
app.get('/add-item/:id', (req, res) => res.send(`<button style="padding: 20px;">Buy Now: ${req.params.id * 3}</button>`));

app.listen(PORT, () => console.log(`Checkout listening on port ${PORT}!`));
