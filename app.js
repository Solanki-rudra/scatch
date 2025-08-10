const express = require('express');
const app = express();

const db = require('./config/mongooseConnection');

const initialRouter = require('./routes/initialRoute');

app.use('/', initialRouter)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});