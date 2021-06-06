import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ShippingEventType from 'App/Models/ShippingEventType'

export default class ShippingEventTypeSeeder extends BaseSeeder {
  public async run() {
    await ShippingEventType.createMany([
      {
        description: 'Produto enviado para a trasnportadora',
      },
      {
        description: 'Produto a caminho do destinatário',
      },
      {
        description: 'Produto enviado',
      },
    ])
  }
}
