// routes/usuarioRoutes.js
const express = require('express');
const {
    getSalas,
    getSala,
    updateSala
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
router.post('/usuario/hay',hayUser);

router.post('/login',iniciarSesion);
router.get('/usuario/token',hayToken);
router.post('/token/',addToken);
router.get('/token/get',getTokens);

router.get('/sala/todo',getSalas);
router.post('/sala/',getSala);
router.post('/sala/update',updateSala);

module.exports = router;
