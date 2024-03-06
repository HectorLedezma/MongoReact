// routes/usuarioRoutes.js
const express = require('express');
const {
    getSalas,
    getSala
} = require('./controller/salas');
const {verificarToken,hayToken} = require('../Token/Middleware/auth');
const { 
    addUser, 
    getUsers, 
    getOneUser, 
    hayUser, 
    iniciarSesion 
} = require('./controller/user');

const {addToken, getTokens} = require('./controller/token');

const router = express.Router();
router.post('/usuarios/new', addUser);
router.post('/usuarios/todo',verificarToken, getUsers);
router.post('/usuario/',verificarToken, getOneUser);
router.get('/gusuario/',verificarToken, getOneUser);
router.get('/usuario/token',hayToken);
router.post('/usuario/hay',hayUser);
router.post('/login',iniciarSesion);
router.get('/salas/todo',getSalas);
router.post('/salas/',getSala);
router.post('/token/',addToken);
router.get('/token/get',getTokens);

module.exports = router;
