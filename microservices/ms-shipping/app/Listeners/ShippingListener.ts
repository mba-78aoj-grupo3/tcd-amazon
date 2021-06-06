import Kafka from 'Config/kafka'
import { EventsList } from '@ioc:Adonis/Core/Event'

/**
 *
 *
 * @export
 * @class OrderListener
 */
export default class OrderListener {
  /**
   *
   *
   * @param {EventsList['change:shippingEvent']} shippingEventTypeId
   * @memberof OrderListener
   */
  public async onChangeShippingEvent(shippingEventTypeId: EventsList['change:shippingEvent']) {
    const message = {
      id: 2,
      shipping_event_type_id: shippingEventTypeId,
    }

    Kafka.produce(
      'change_shippingEvent',
      message,
      (success: any) => console.log(success),
      (error: any) => console.log(error)
    )
  }
}
