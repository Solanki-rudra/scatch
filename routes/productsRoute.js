const express = require('express');
const Router = express.Router();
const upload = require('../config/multer');
const productModel = require('../models/productModel');

Router.get('/', async (req, res) => {
    try {
        const products = await productModel.find()
        res.render('products', { products });
    } catch (error) {
        res.status(500).send('Error fetching products: ' + error.message);
    }
})

Router.post('/create', upload.single('image'), async (req, res) => {
    const { name, price, discount, bgColor, panelColor, textColor } = req.body;
    const image = req.file ? req.file.buffer : null;
    try {
        const product = await productModel.create({
            name,
            price,
            discount: discount ? parseFloat(discount) : 0,
            bgColor,
            panelColor,
            textColor,
            image
        })
        res.redirect('/products');
    } catch (error) {
        res.status(500).send('Error creating product: ' + error.message);
    }
})


module.exports = Router;