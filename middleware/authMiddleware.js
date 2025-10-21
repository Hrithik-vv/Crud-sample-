const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  try {
    const header = req.headers.authorization || req.headers.Authorization;
    if (!header || !header.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'No token, authorization denied' });
    }
    const token = header.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id, email: decoded.email };
    next();
  } catch (error) {
    console.error('Auth middleware error', error);
    return res.status(401).json({ success: false, message: 'Token is not valid' });
  }
};

module.exports = protect;
