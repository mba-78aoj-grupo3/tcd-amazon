/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import CircuitBreakerOpossum from 'opossum'
import axios, { AxiosRequestConfig } from 'axios'

Route.get('/health', async () => {
  return true
})

Route.group(() => {
  Route.patch('shippings/:id/change-status', 'ShippingController.changeStatus')
  Route.get('shippings/calculate', 'ShippingController.calculate')
  Route.resource('shippings', 'ShippingController')
})
  // .middleware('auth:api')
  .prefix('api')

//
// ************************* TESTES ****************************
//
const options = {
  timeout: 3000,
  errorThresholdPercentage: 50,
  resetTimeout: 5000,
}

const circuitBreakerOpossum = new CircuitBreakerOpossum(axios, options)

circuitBreakerOpossum.fallback(() =>
  console.log('Serviço indisponivel no momento', circuitBreakerOpossum.status.stats)
)

Route.get('/circuit', async () => {
  circuitBreakerOpossum
    .fire('http://localhost:3333/test')
    .then((result) => console.log(result.status))
    .catch((result) => console.log(result.status))
})

Route.get('/test', async (data) => {
  console.log('/test')
  if (Math.random() > 0.8) {
    console.log('####################### success ###########################')
    data.response.status(200).send('Success!')
  } else {
    console.log('####################### fail ###########################')
    data.response.status(400).send('Failed!')
  }
})
