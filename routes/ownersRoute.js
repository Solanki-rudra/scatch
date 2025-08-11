const express = require('express');
const ownerModel = require('../models/ownerModel');
const Router = express.Router();

Router.get('/', (req, res) => {
    res.send('Welcome to the owners API!');
});

console.log('ENV:', process.env.ENV);

if (process.env.ENV === 'development') {
    Router.post('/create', async (req, res) => {
        try {
            const owners = await ownerModel.find();
            if (owners.length > 0) {
                return res.status(400).send('Owner already exists');
            }

            const { fullname, email, password } = req.body;

            const createdOwner = await ownerModel.create({
                fullname,
                email,
                password
            });

            res.status(201).send(createdOwner);
        } catch (err) {
            res.status(500).send('Error creating owner: ' + err.message);
        }
    });
}

module.exports = Router;