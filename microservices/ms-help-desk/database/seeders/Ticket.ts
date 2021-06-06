import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Ticket from '../../app/Models/Ticket'

export default class TicketSeeder extends BaseSeeder {
  public async run() {
    await Ticket.createMany([
      {
        title: 'Problemas no acesso',
        description: 'Não estou conseguindo logar',
      },
      {
        title: 'Senha bloqueada',
        description: 'Minha senha está bloqueada',
      },
      {
        title: 'Problema na entrega',
        description: 'Não recebi o produto',
      },
    ])
  }
}
