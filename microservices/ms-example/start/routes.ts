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
import UserModel from 'App/Models/UserModel'
import Notification from 'App/Entities/Notification'
// Circuit Breaker
import CircuitBreaker from 'App/circuit-breaker/CircuitBreaker'
import CircuitBreakerOpossum from 'opossum'
import axios, { AxiosRequestConfig } from 'axios'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/init-kafka', async () => {
  Notification.consumeEvents()

  const user = new UserModel()

  console.log('finish')

  return user
})

//*
// * Ciruito codado, na pasta APP
const params: AxiosRequestConfig = {
  method: 'get',
  url: 'http://localhost:3333/test',
}
// *************************

// *
// * Ciruito da lib
const circuitBreaker = new CircuitBreaker(params)

const options = {
  timeout: 3000,
  errorThresholdPercentage: 50,
  resetTimeout: 5000,
}

const circuitBreakerOpossum = new CircuitBreakerOpossum(axios, options)

circuitBreakerOpossum.fallback(() =>
  console.log('Serviço indisponivel no momento', circuitBreakerOpossum.status.stats)
)
// *************************

Route.get('/circuit', async () => {
  // circuitBreaker.exec().then(console.log).catch(console.error)

  circuitBreakerOpossum
    .fire('http://localhost:3333/test')
    .then((result) => console.log(result.status))
    .catch((result) => console.log(result.status))
})

Route.get('/test', async (data) => {
  console.log('/test')
  if (Math.random() > 0.2) {
    console.log('####################### success ###########################')
    data.response.status(200).send('Success!')
  } else {
    console.log('####################### fail ###########################')
    data.response.status(400).send('Failed!')
  }
})
