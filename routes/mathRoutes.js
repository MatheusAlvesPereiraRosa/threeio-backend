const express = require('express')
const router = express.Router()
const authMiddlware = require('../middlewares/authMiddleware')

router.post('/calculate', authMiddlware, (req, res) => {
    const {num1, num2, method} = req.body

    console.log(req.body)

    let result = 0

    if (method === "soma") {
        result = num1 + num2
    } 

    if (method === "sub") {
        result = num1 - num2
    }

    if (method === "multi") {
        result = num1 * num2
    }

    if (method === "divi") {
        result = num1 / num2
    }

    res.send({result})
})

module.exports = router