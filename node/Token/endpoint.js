const express = require('express');
const crypto = require('crypto-js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

// ...
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ message: 'No se proporcionó un token' });
    }
  
    jwt.verify(token, 'secreto-seguro', (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Token inválido' });
      }
  
      req.user = user;
      next();
    });
};


  // Ruta protegida, solo accesible con un token válido
app.get('/api/protected-route', verifyToken, (req, res) => {
    res.json({ message: 'Acceso permitido' });
});
  

  // Manejar el registro de usuarios
app.post('/api/register', async (req, res) => {

});


  // Manejar la autenticación de usuarios y generar el token JWT
app.post('/api/login', async (req, res) => {

    const user = { id: 1, username: 'nombredeusuario' };
    const token = jwt.sign(user, 'secreto-seguro', { expiresIn: '2m' });

    res.json({ token });

});

module.exports = app;