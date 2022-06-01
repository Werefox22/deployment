const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT

// routes
app.get('/', (req, res) => {
	res.send('Hello world!')
})

app.listen(PORT)