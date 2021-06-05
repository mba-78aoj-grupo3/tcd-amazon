import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import OrderEvent from 'App/Models/OrderEvent'

export default class OrderEventSeeder extends BaseSeeder {
  public async run() {
    await OrderEvent.createMany([
      {
        orderEventTypeId: 1,
        orderId: 1,
      },
      {
        orderEventTypeId: 2,
        orderId: 1,
      },
      {
        orderEventTypeId: 1,
        orderId: 2,
      },
      {
        orderEventTypeId: 2,
        orderId: 2,
      },
      {
        orderEventTypeId: 3,
        orderId: 2,
      },
    ])
  }
}
