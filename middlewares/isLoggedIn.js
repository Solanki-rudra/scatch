const jwt = require('jsonwebtoken');

const isLoggedIn = (req, res, next) => {
    console.log(req.cookies)
    if(!req.cookies?.token) {
        return res.redirect('/login');
    }
    try {
        let decodedToken = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
        console.log(decodedToken);
    } catch (error) {
        res.redirect('/login');
    }
    next();
}

module.exports = isLoggedIn;