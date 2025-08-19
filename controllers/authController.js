const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const { generateToken } = require("../utils/token");

const registerUser = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        const isUser = await userModel.findOne({ email })
        if (isUser) return res.status(400).send('User already exists')

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userModel.create({
            fullname,
            email,
            password: hashedPassword
        })
        const token = generateToken(user)
        res.cookie('token', token)
        res.send({
            message: 'User registered successfully',
            user
        })
    } catch (error) {
        res.send({
            message: 'Error registering user',
            error: error.message
        });
    }
}

const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email})
        if (!user) return res.status(400).send('User not found')
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) return res.status(400).send('Invalid password')
        const token = generateToken(user)
        res.cookie('token', token)
        res.send('User logged in successfully')
    } catch (error) {
        res.send({
            message: 'Error logging in user',
            error: error.message
        })
    }
}

module.exports = { registerUser, loginUser }