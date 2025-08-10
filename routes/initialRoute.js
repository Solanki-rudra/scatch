const express = require('express');
const Router = express.Router();

const ownersRouter = require('./ownersRoute');
const productsRouter = require('./productsRoute');
const usersRouter = require('./usersRoute');

Router.get('/', (req, res) => {
  res.send('Welcome to the initial API!');
});

Router.use('/owners', ownersRouter);
Router.use('/products', productsRouter)
Router.use('/users', usersRouter)

module.exports = Router;