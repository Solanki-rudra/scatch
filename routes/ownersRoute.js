const express = require('express');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.send('Welcome to the owners API!');
})

module.exports = Router;