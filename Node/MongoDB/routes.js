// routes/usuarioRoutes.js
const express = require('express');
const {
    addUser,
    getUsers,
    getOneUser,
    getSalas,
    getSala,
    iniciarSesion,
    hayUser
} = require('./controller');
const {verificarToken,hayToken} = require('../Token/Middleware/auth');

const router = express.Router();
router.post('/usuarios/new', addUser);
router.post('/usuarios/todo',verificarToken, getUsers);
router.post('/usuario/',verificarToken, getOneUser);
router.get('/usuario/token',hayToken);
router.post('/usuario/hay',hayUser);
router.get('/login',iniciarSesion)
router.get('/salas/todo',getSalas)
router.post('/salas/',getSala)

module.exports = router;
