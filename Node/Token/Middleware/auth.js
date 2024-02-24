// middleware/auth.js
const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
  const token = req.header('token');

  if (!token) {
    return res.status(401).json({ msg: 'No hay token, autorización denegada' });
  }

  try {
    const decoded = jwt.verify(token, 'claveTekken');
    req.usuario = decoded.usuario;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token no válido' });
  }
};

module.exports = verificarToken;
