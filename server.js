const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const db = require('./db')
//Import Controllers

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req,res) => {
  res.send('This is Recipe Root')
})

app.listen(PORT, () => {
  console.log(`Express is listening on port: ${PORT}`)
})