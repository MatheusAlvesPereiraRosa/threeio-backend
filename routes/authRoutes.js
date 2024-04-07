const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController')

/* Login sem usuário para pegar permissão via jwt */
router.get('/login', authController.login);

module.exports = router;
