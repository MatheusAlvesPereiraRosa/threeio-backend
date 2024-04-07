const jwt = require('jsonwebtoken');
const { secretKey } = require('../config');

const authController = {
    login: async (req, res) => {
        // Gerando token jwt
        const token = jwt.sign({ username: 'math_user' }, secretKey, { expiresIn: '1h' });
        res.json({ token: 'Bearer ' + token });
    }
}

module.exports = authController