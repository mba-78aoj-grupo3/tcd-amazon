import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Order from 'App/Models/Order'

export default class OrderSeeder extends BaseSeeder {
  public async run() {
    await Order.createMany([
      {
        amountValue: 30000,
        lastEventTypeId: 2,
        customerId: 1,
      },
      {
        amountValue: 12000,
        lastEventTypeId: 3,
        customerId: 2,
      },
    ])
  }
}
