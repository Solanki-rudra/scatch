const express = require('express');
const Router = express.Router();

const ownersRouter = require('./ownersRoute');
const productsRouter = require('./productsRoute');
const usersRouter = require('./usersRoute');
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');
const isLoggedIn = require('../middlewares/isLoggedIn');

Router.get('/', (req, res) => {
  res.send('Welcome to the initial API!');
});

Router.get('/login', (req, res) => {
  res.render('login');
});

Router.get('/register', (req, res) => {
  res.render('register');
});

Router.post('/register', registerUser)
Router.post('/login', loginUser);

Router.get('/logout', logoutUser)

Router.use('/owners', isLoggedIn, ownersRouter);
Router.use('/products', isLoggedIn, productsRouter)
Router.use('/users', isLoggedIn, usersRouter)

module.exports = Router;