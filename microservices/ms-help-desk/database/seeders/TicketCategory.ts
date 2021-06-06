import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TicketCategory from '../../app/Models/TicketCategory'

export default class TicketCategorySeeder extends BaseSeeder {
  public async run() {
    await TicketCategory.createMany([
      {
        description: 'Não estou conseguindo logar',
      },
      {
        description: 'Minha senha está bloqueada',
      },
      {
        description: 'Não recebi o produto',
      },
    ])
  }
}
