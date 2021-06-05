import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class OrderEventType extends BaseModel {
  /**
   *
   *
   * @static
   * @memberof OrderEventType
   */
  public static table = 'orders_events_types'

  /**
   *
   *
   * @type {number}
   * @memberof OrderEventType
   */
  @column({ isPrimary: true })
  public id: number

  /**
   *
   *
   * @type {DateTime}
   * @memberof OrderEventType
   */
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  /**
   *
   *
   * @type {DateTime}
   * @memberof OrderEventType
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  /**
   *
   *
   * @type {string}
   * @memberof OrderEventType
   */
  @column()
  public description: string
}
