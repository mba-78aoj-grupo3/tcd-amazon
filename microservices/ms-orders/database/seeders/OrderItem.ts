import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import OrderItem from 'App/Models/OrderItem'

export default class OrderItemSeeder extends BaseSeeder {
  public async run() {
    await OrderItem.createMany([
      {
        amountValue: 10000,
        orderId: 1,
        productId: 1,
        quantity: 2,
      },
      {
        amountValue: 5000,
        orderId: 1,
        productId: 2,
        quantity: 2,
      },
      {
        amountValue: 6000,
        orderId: 2,
        productId: 1,
        quantity: 1,
      },
      {
        amountValue: 6000,
        orderId: 2,
        productId: 2,
        quantity: 1,
      },
    ])
  }
}
