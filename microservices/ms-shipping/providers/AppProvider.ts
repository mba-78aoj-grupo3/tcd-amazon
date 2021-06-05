import ConsulConfig from 'Config/consul'
import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import { calculateLatitudinalDistance, transformAddressToLatLog } from 'Config/maps'

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
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
