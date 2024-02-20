const express = require('express');
const { login, log, logout } = require('../MongoDB/controller');

const router = express.Router();

router.post('/login',login);
router.get('/log',log);
router.post('/logout',logout);

module.exports = router;