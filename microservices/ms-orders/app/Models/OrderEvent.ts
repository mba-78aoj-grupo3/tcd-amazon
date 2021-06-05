import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import Order from './Order'
import OrderEventType from './OrderEventType'

export default class OrderEvent extends BaseModel {
  /**
   *
   *
   * @static
   * @memberof OrderEvent
   */
  public static table = 'orders_events'

  /**
   *
   *
   * @type {number}
   * @memberof OrderEvent
   */
  @column({ isPrimary: true })
  public id: number

  /**
   *
   *
   * @type {DateTime}
   * @memberof OrderEvent
   */
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  /**
   *
   *
   * @type {DateTime}
   * @memberof OrderEvent
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  /**
   *
   *
   * @type {number}
   * @memberof OrderEvent
   */
  @column()
  public orderId: number

  /**
   *
   *
   * @type {number}
   * @memberof OrderEvent
   */
  @column()
  public orderEventTypeId: number

  /**
   *
   *
   * @type {BelongsTo<typeof Order>}
   * @memberof OrderEvent
   */
  @belongsTo(() => Order)
  public order: BelongsTo<typeof Order>

  /**
   *
   *
   * @type {BelongsTo<typeof OrderEventType>}
   * @memberof OrderEvent
   */
  @belongsTo(() => OrderEventType)
  public orderEventType: BelongsTo<typeof OrderEventType>
}
