import Notification from 'App/Entities/Notification'
import { BaseCommand } from '@adonisjs/core/build/standalone'

export default class StartConsumer extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'start:consumer'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = ''

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process
     */
    stayAlive: false,
  }

  public async run() {
    console.log('Init start consumer...')
    this.logger.info('Init start consumer...')
    Notification.consumeEvents()
  }
}
