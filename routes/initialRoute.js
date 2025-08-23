const express = require('express');
const Router = express.Router();

const ownersRouter = require('./ownersRoute');
const productsRouter = require('./productsRoute');
const usersRouter = require('./usersRoute');
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const userModel = require('../models/userModel');

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

Router.get('/add-to-cart/:id', isLoggedIn, async (req, res) => {
  console.log(req.user);
  const user = await userModel.findById(req.user.userId);
  user.cart.push(req.params.id);
  await user.save()
  res.redirect('/products');
})

Router.get('/cart', isLoggedIn, async (req, res) => {
  console.log(req.user);
  const user = await userModel.findById(req.user.userId).populate('cart');
  res.render('cart', { cart: user.cart });
})

Router.use('/owners', isLoggedIn, ownersRouter);
Router.use('/products', isLoggedIn, productsRouter)
Router.use('/users', isLoggedIn, usersRouter)

module.exports = Router;