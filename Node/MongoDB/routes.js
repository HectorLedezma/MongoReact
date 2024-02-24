// routes/usuarioRoutes.js
const express = require('express');
const {
    addUser,
    getUsers,
    getOneUser,
    getSalas,
    getSala,
    iniciarSesion
} = require('./controller');
const verificarToken = require('../Token/Middleware/auth');

const router = express.Router();
router.post('/usuarios/new', addUser);
router.post('/usuarios/todo', getUsers);
router.post('/usuario/',verificarToken, getOneUser);
router.get('/login',iniciarSesion)
router.get('/salas/todo',getSalas)
router.post('/salas/',getSala)

module.exports = router;
