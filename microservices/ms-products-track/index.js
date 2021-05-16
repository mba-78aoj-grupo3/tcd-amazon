const express = require('express')
const app = express()
const port = 8082

app.get('/', (req, res) => {
  res.send('ms-products-track')
})

app.listen(port, () => {
  console.log(`ms-products-track http://localhost:${port}`)
})