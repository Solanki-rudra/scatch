const mongoose = require('mongoose');
const config = require('config');

mongoose
    .connect(`${config.get('MONGODB_URI')}/scatch`)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB : ', err);
    })

module.exports = mongoose.connection;