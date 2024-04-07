const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

/* Login sem usuário para pegar permissão via jwt */
router.get('/login', authController.login);
router.get('/validate-token', authMiddleware, authController.validate)

module.exports = router;
