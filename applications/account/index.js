/**
 *  Account
 */
const express = require('express');
const app = express();
const PORT = 3001;

app.get('/user', (req, res) => res.send('<div>User Information from Account Gateway</div>'));

app.listen(PORT, () => console.log(`Account listening on port ${PORT}!`));
