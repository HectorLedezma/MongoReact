// middleware/auth.js
const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No hay token, autorización denegada' });
  }

  try {
    const decoded = jwt.verify(token, 'tu_clave_secreta');
    req.usuario = decoded.usuario;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token no válido' });
  }
};

module.exports = verificarToken;
