import { DateTime } from 'luxon'
import { column, BaseModel, hasMany, HasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import OrderItem from './OrderItem'
import OrderEvent from './OrderEvent'
import OrderEventType from './OrderEventType'

/**
 *
 *
 * @export
 * @class Order
 * @extends {BaseModel}
 */
export default class Order extends BaseModel {
  /**
   *
   *
   * @type {number}
   * @memberof Order
   */
  @column({ isPrimary: true })
  public id: number

  /**
   *
   *
   * @type {DateTime}
   * @memberof Order
   */
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  /**
   *
   *
   * @type {DateTime}
   * @memberof Order
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  /**
   *
   *
   * @type {number}
   * @memberof Order
   */
  @column()
  public customerId: number

  /**
   *
   *
   * @type {number}
   * @memberof Order
   */
  @column()
  public lastEventTypeId: number

  /**
   *
   *
   * @type {number}
   * @memberof Order
   */
  @column()
  public amountValue: number

  /**
   *
   *
   * @type {BelongsTo<typeof OrderEventType>}
   * @memberof Order
   */
  @belongsTo(() => OrderEventType, {
    foreignKey: 'lastEventTypeId',
  })
  public lastEventType: BelongsTo<typeof OrderEventType>

  /**
   *
   *
   * @type {HasMany<typeof OrderItem>}
   * @memberof Order
   */
  @hasMany(() => OrderItem)
  public orderItems: HasMany<typeof OrderItem>

  /**
   *
   *
   * @type {BelongsTo<typeof OrderEvent>}
   * @memberof Order
   */
  @hasMany(() => OrderEvent)
  public orderEvent: HasMany<typeof OrderEvent>
}
