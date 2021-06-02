import { DateTime } from 'luxon'
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import Ticket from './Ticket'

/**
 *
 *
 * @export
 * @class TicketCategory
 * @extends {BaseModel}
 */
export default class TicketCategory extends BaseModel {
  /**
   *
   *
   * @type {number}
   * @memberof TicketCategory
   */
  @column({ isPrimary: true })
  public id: number

  /**
   *
   *
   * @type {DateTime}
   * @memberof TicketCategory
   */
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  /**
   *
   *
   * @type {DateTime}
   * @memberof TicketCategory
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  /**
   *
   *
   * @type {string}
   * @memberof TicketCategory
   */
  @column()
  public description: string

  /**
   *
   *
   * @type {BelongsTo<typeof Ticket>}
   * @memberof TicketStatus
   */
  @belongsTo(() => Ticket)
  public ticket: BelongsTo<typeof Ticket>
}
