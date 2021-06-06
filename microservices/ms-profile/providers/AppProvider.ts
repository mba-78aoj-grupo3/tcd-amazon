import Env from '@ioc:Adonis/Core/Env'
import ConsulConfig from 'Config/consul'
import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
    const consul = new ConsulConfig()

    consul
      .get('microservices')
      .then((result) => {
        Env.set('MS_PRODUCT_URL', result['MS_PRODUCT_URL'])
      })
      .catch((errr) => console.log(errr))
  }

  public async boot() {
    // IoC container is ready
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
