const jwt = require('jsonwebtoken');
require('dotenv').config();

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = ((req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization.replace('Bearer ', '');
  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).send({ message: 'Необходима авторизация' });
  }
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'some-key');
  } catch (err) {
    return res.status(401).send({ message: 'Необходима авторизация1' });
  }

  req.user = payload;
  return next();
});
