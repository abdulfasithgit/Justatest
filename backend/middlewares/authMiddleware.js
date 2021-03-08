const jwt = require('jsonwebtoken')
const users = require('../data/users')

const protect = (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_TOKEN);
      req.user =  users.find(p => p.id == decoded.id)
    
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Unauthorized, token failed');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Unauthorized, no token');
  }
};

module.exports = protect;