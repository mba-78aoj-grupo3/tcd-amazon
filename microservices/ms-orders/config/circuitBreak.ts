import CircuitBreakerOpossum from 'opossum'
import axios, { AxiosRequestConfig } from 'axios'

const options = {
  timeout: 3000,
  errorThresholdPercentage: 50,
  resetTimeout: 5000,
}

const circuitBreakerOpossum = new CircuitBreakerOpossum(axios, options)

circuitBreakerOpossum.fallback(() =>
  console.log('Serviço indisponivel no momento', circuitBreakerOpossum.status.stats)
)

export { circuitBreakerOpossum }
