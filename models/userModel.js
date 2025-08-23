const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/scatch')

const userSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    picture: String
})

module.exports = mongoose.model('User', userSchema);