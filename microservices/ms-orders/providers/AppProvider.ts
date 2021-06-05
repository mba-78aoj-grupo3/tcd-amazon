import Kafka from 'Config/kafka'
import ConsulConfig from 'Config/consul'
import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // Register your own bindings
    new ConsulConfig()
  }

  public async boot() {
    // IoC container is ready
  }

  public async ready() {
    // App is ready
    const Event = (await import('@ioc:Adonis/Core/Event')).default
    Kafka.consume('order-status-change', (message) => Event.emit('change:order-order', message))
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
