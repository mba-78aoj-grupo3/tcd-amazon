import axios from 'axios'
import CircuitBreakerOpossum from 'opossum'

const options = {
  timeout: 3000,
  errorThresholdPercentage: 50,
  resetTimeout: 5000,
}

const circuitBreakerOpossum = new CircuitBreakerOpossum(axios, options)

circuitBreakerOpossum.fallback(() => {
  console.log('Serviço indisponivel no momento', circuitBreakerOpossum.status.stats)
  return {}
})

export { circuitBreakerOpossum }
