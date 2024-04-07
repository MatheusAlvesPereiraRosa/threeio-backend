const express = require('express')
const authRoutes = require('./routes/authRoutes')
const mathRoute = require('./routes/mathRoutes')

const PORT = 3000
const HOST = '0.0.0.0'

const app = express()

app.get('/', (req, res) => {
    res.send("Mudei de novo")
})

app.use('/api/auth', authRoutes);

app.listen(PORT, HOST)