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
    // Kafka.consume('user-created', (e) => console.log(e))
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
