import { EventsList } from '@ioc:Adonis/Core/Event'
import Notification from 'App/Entities/Notification'

export default class UserListener {
  public async onNewUser(user: EventsList['new:user']) {
    Notification.produceEvent('exampleTopic', `New user created ${user}`)
  }
}
