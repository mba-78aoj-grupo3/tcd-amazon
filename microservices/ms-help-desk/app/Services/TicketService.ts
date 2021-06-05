import Ticket from 'App/Models/Ticket'
import Event from '@ioc:Adonis/Core/Event'
import { Exception } from '@poppinss/utils'

/**
 *
 *
 * @export
 * @class TicketService
 */
export default class TicketService {
  /**
   *
   *
   * @static
   * @return {*}  {Promise<Ticket[]>}
   * @memberof TicketService
   */
  public static async index(): Promise<Ticket[]> {
    const ticket = await Ticket.query().preload('ticketCategory').preload('ticketStatus')

    return ticket
  }

  /**
   *
   *
   * @static
   * @param {number} id
   * @return {*}  {(Promise<Ticket | null>)}
   * @memberof TicketService
   */
  public static async show(id: number): Promise<Ticket | null> {
    const ticket = await Ticket.find(id)

    // await ticket?.load('assigner')
    // await ticket?.load('customer')
    await ticket?.load('ticketCategory')
    await ticket?.load('ticketStatus')

    return ticket
  }

  /**
   *
   *
   * @param {Record<string, string>} body
   * @return {*}  {Promise<Ticket>}
   * @memberof TicketService
   */
  public static async store(body: Record<string, string>): Promise<Ticket> {
    const ticket = await Ticket.create(body)

    Event.emit('new:ticket', ticket)

    return ticket
  }
}
