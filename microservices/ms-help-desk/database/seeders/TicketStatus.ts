import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TicketStatus from '../../app/Models/TicketStatus'

export default class TicketStatusSeeder extends BaseSeeder {
  public async run () {
    await TicketStatus.createMany([
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
