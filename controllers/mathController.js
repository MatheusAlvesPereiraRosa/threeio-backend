const mathController = {
    calculate: async (req, res) => {
        console.log(req.body)

        const { num1, num2, method } = req.body

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

        res.send({ result })
    }
}

module.exports = mathController