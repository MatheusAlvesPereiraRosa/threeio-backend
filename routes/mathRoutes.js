const express = require('express')
const router = express.Router()

const authMiddlware = require('../middlewares/authMiddleware')
const mathController = require('../controllers/mathController')

router.post('/calculate', authMiddlware, mathController.calculate)

module.exports = router