const express = require('express')
const app = express()
const port = 8092

app.get('/', (req, res) => {
  res.send('ms-products-search')
})

app.listen(port, () => {
  console.log(`ms-products-search http://localhost:${port}`)
})