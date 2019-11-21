const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('./error');

module.exports = ((req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthorizedError('Необходима авторизация');
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, 'some-key');
  } catch (err) {
    throw new UnauthorizedError('Необходима авторизация');
    next(err);
  }
  req.user = payload;
  return next();
});
