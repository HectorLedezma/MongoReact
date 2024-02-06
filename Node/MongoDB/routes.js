// routes/usuarioRoutes.js
const express = require('express');
const {
    addUser,
    getUsers,
    getOneUser,
    getSalas,
    getSala
} = require('./controller');

const router = express.Router();
router.post('/usuarios/new', addUser);
router.post('/usuarios/todo', getUsers);
router.post('/usuario/', getOneUser);
router.get('/salas/todo',getSalas)
router.post('/salas/',getSala)

module.exports = router;
