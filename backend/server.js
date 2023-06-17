const express = require('express')
const data = require('./data.json')
const bodyParser = require('body-parser')
const app = express()
var cors = require('cors')

app.use(cors())
// app.use(bodyParser())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/products', function (req, res) {
    res.send(data)
  })

app.post('/user', function (req, res) {
  res.send("Created User!")
})

app.delete('/user', function (req, res) {
  res.send("Created User!")
})

app.listen(3000), () => {
    console.log('Server is running on port 3000')
}