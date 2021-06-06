import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ShippingEvent from 'App/Models/ShippingEvent'

export default class ShippingEventSeeder extends BaseSeeder {
  public async run() {
    await ShippingEvent.createMany([
      {
        shippingId: 1,
        shippingEventTypeId: 1,
      },
      {
        shippingId: 1,
        shippingEventTypeId: 2,
      },
      {
        shippingId: 2,
        shippingEventTypeId: 1,
      },
      {
        shippingId: 2,
        shippingEventTypeId: 2,
      },
      {
        shippingId: 2,
        shippingEventTypeId: 3,
      },
    ])
  }
}
