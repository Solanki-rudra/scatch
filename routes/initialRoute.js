const express = require('express');
const Router = express.Router();

const ownersRouter = require('./ownersRoute');
const productsRouter = require('./productsRoute');
const usersRouter = require('./usersRoute');
const { registerUser, loginUser } = require('../controllers/authController');

Router.get('/', (req, res) => {
  res.send('Welcome to the initial API!');
});

Router.get('/register', registerUser)
Router.get('/login', loginUser);

Router.use('/owners', ownersRouter);
Router.use('/products', productsRouter)
Router.use('/users', usersRouter)

module.exports = Router;