const jwt = require('jsonwebtoken');
const { secretKey } = require('./config');

module.exports = function (req, res, next) {
    // Pegando token do header
    const token = req.header('Authorization');

    // Checando se há um token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
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
