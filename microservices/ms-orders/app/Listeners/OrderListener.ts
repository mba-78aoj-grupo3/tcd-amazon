import { EventsList } from '@ioc:Adonis/Core/Event'
import OrderService from 'App/Services/OrderService'

export default class OrderListener {
  public async onNewOrderCreated(order: EventsList['new-order-created']) {
    // faz coisas se uma order for criada
  }

  /**
   *
   *
   * @param {EventsList['change:shippingEvent']} shippingEventTypeId
   * @memberof OrderListener
   */
  public async onChangeShippingEvent(message: any) {
    const id = message.value.id
    const body = {
      order_id: message.value.id,
      order_event_type_id: message.value.shipping_event_type_id,
    }

    if (!id || !body.order_id || !body.order_event_type_id) return 'Erro nos dados'

    OrderService.updateOrderEvent(id, body)
  }
}
