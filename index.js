const express = require('express')
const authRoutes = require('./routes/authRoutes')
const mathRoutes = require('./routes/mathRoutes')

const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = 3000
const HOST = '0.0.0.0'
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
    "origin": "*",
}))

app.get('/', (req, res) => {
    res.send("Aplicação rodando!")
})

app.use('/api/auth', authRoutes);
app.use('/api/math', mathRoutes)

app.listen(PORT, HOST)