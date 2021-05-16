const express = require('express')
const app = express()
const port = 8081

app.get('/', (req, res) => {
  res.send('ms-products-track')
})

app.listen(port, () => {
  console.log(`ms-customer-service http://localhost:${port}`)
})