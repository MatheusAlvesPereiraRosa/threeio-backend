const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const { secretKey } = require('../config');

/* Login sem usuário para pegar permissão via jwt */
router.get('/login', (req, res) => {
    // Gerando token jwt
    const token = jwt.sign({ username: 'example_user' }, secretKey, { expiresIn: '1h' });
    res.json({ token });
});

module.exports = router;
