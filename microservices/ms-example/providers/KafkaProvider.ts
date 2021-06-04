import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import Kafka from 'Config/kafka'

/*
|--------------------------------------------------------------------------
| Provider
|--------------------------------------------------------------------------
|
| Your application is not ready when this file is loaded by the framework.
| Hence, the top level imports relying on the IoC container will not work.
| You must import them inside the life-cycle methods defined inside
| the provider class.
|
| @example:
|
| public async ready () {
|   const Database = (await import('@ioc:Adonis/Lucid/Database')).default
|   const Event = (await import('@ioc:Adonis/Core/Event')).default
|   Event.on('db:query', Database.prettyPrint)
| }
|
*/
export default class KafkaProvider {
  public static needsApplication = true
  constructor(protected application: ApplicationContract) {}

  public register() {
    // Register your own bindings
  }

  public async boot() {
    // All bindings are ready, feel free to use them
  }

  public async ready() {
    // App is ready
    const Event = (await import('@ioc:Adonis/Core/Event')).default

    // Kafka.consume('order-created', (message) => Event.emit('new:order', message))
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
