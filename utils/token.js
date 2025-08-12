const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    try {
        return jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET)
    } catch (error) {
        throw new Error('Error generating token: ' + error.message);
    }
}

const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (err) {
        throw new Error('Invalid token')
    }
}

module.exports = { generateToken, verifyToken };