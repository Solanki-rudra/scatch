const express = require('express');
const app = express();
require('dotenv').config();
const ejs = require('ejs');
const cookieParser = require('cookie-parser');

const db = require('./config/mongooseConnection');

const initialRouter = require('./routes/initialRoute');

app.set('view engine', 'ejs');
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', initialRouter)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});