import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import OrderEventType from 'App/Models/OrderEventType'

export default class OrderEventTypeSeeder extends BaseSeeder {
  public async run() {
    await OrderEventType.createMany([
      {
        description: 'Pedido efetuado',
      },
      {
        description: 'Pedido Aprovado',
      },
      {
        description: 'Em separação',
      },
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
