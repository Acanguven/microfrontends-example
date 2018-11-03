/**
 *  Search
 */
const express = require('express');
const app = express();
const PORT = 3004;

app.get('/banners/:path?', (req, res) => res.send(`<div>Banners related to <small>${req.params.path || '/'}</small> from Search gateway</div>`));

app.listen(PORT, () => console.log(`Search listening on port ${PORT}!`));
