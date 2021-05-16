const express = require('express')
const app = express()
const port = 8093

app.get('/', (req, res) => {
  res.send('ms-products-taxes')
})

app.listen(port, () => {
  console.log(`ms-products-taxes http://localhost:${port}`)
})