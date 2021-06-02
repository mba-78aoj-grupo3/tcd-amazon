import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import Notification from 'App/Entities/Notification'
import ConsulConfig from 'Config/consul'

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
    Notification.consumeEvents('user-created')
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
