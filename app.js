const express = require('express')
require('dotenv').config()

const { connection } = require('./utils/backConnection')

const app = express()
const port = process.env.PORT || 5000

connection()

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

app.use(express.static(__dirname + '/public'))

app.use('/api/v1', require('./routers/backRouter'))


app.listen(port, () => {
    console.log(`el puerto ${port} esta conectado`)
})