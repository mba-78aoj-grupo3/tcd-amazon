import { EventsList } from '@ioc:Adonis/Core/Event'
import Kafka from 'Config/kafka'

export default class UserListener {
  public async onNewUser(user: EventsList['new:user']) {
    Kafka.produce('user-created', JSON.stringify(user))
  }
}
