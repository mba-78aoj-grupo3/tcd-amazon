import Kafka from 'Config/kafka'
import Env from '@ioc:Adonis/Core/Env'
import ConsulConfig from 'Config/consul'
import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}
  private consul!: ConsulConfig

  public register() {
    // Register your own bindings
    this.consul = new ConsulConfig()

    this.consul
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
    const Event = (await import('@ioc:Adonis/Core/Event')).default
    Kafka.consume(
      'change_shippingEvent',
      (message) => Event.emit('change:shippingEvent', message),
      (error) => console.log(error)
    )
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
