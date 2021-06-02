import { EventsList } from '@ioc:Adonis/Core/Event'

export default class OrderListener {
  public async onNewOrderCreated(order: EventsList['new-order-created']) {
    // faz coisas se uma order for criada
  }
}
