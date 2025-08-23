const jwt = require('jsonwebtoken');

const isLoggedIn = (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res.redirect('/login');
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken; // ✅ attach user data to request
    next();
  } catch (error) {
    console.error("JWT verification failed:", error.message);
    return res.redirect('/login');
  }
};

module.exports = isLoggedIn;
