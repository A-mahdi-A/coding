// authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/user'); 

const authMiddleware = async (req, res, next) => {
  const token = req.header('auth');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  try {
    const decoded = jwt.verify(token, 'SECRET_JWT_CODE_A&#%_765'); 
    const user = await User.findById(decoded._id,{password:0});
    if (!user) {
      return res.status(401).json({ message: 'Unauthorized: Invalid user' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

module.exports = authMiddleware;
