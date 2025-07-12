// rewears-backend/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token'); // Common header name for JWT

  // Check if no token
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  // Verify token
  try {
    // Replace 'your_jwt_secret' with your actual secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret');

    req.user = decoded.user; // Attach user payload to request object
    next(); // Move to the next middleware/route handler
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};