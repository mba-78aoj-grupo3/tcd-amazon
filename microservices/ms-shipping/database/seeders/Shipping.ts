import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Shipping from 'App/Models/Shipping'

export default class ShippingSeeder extends BaseSeeder {
  public async run() {
    await Shipping.createMany([
      {
        name: 'Pedido via site',
        description: '',
      },
      {
        name: 'Pedido via site',
        description: '',
      },
    ])
  }
}
