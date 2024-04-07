const jwt = require('jsonwebtoken');
const { secretKey } = require('../config');

function authMiddleware (req, res, next) {
    // Pegando token do header
    const authHeader = req.header('Authorization');

    // Checando se há um token
    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ msg: 'Invalid token format, authorization denied' });
    }

    try {
        // Verificando token
        const decoded = jwt.verify(token, secretKey);

        // Adicionando usuário
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

module.exports = authMiddleware
