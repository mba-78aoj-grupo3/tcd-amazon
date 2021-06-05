import Order from './Order'
import { DateTime } from 'luxon'
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

/**
 *
 *
 * @export
 * @class OrderItem
 * @extends {BaseModel}
 */
export default class OrderItem extends BaseModel {
  /**
   *
   *
   * @static
   * @memberof OrderItem
   */
  public static table = 'orders_items'

  /**
   *
   *
   * @type {number}
   * @memberof OrderItem
   */
  @column({ isPrimary: true })
  public id: number

  /**
   *
   *
   * @type {DateTime}
   * @memberof OrderItem
   */
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  /**
   *
   *
   * @type {DateTime}
   * @memberof OrderItem
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  /**
   *
   *
   * @type {number}
   * @memberof OrderItem
   */
  @column()
  public orderId: number

  /**
   *
   *
   * @type {number}
   * @memberof OrderItem
   */
  @column()
  public productId: number

  /**
   *
   *
   * @type {number}
   * @memberof OrderItem
   */
  @column()
  public product: any

  /**
   *
   *
   * @type {number}
   * @memberof OrderItem
   */
  @column()
  public quantity: number

  /**
   *
   *
   * @type {number}
   * @memberof OrderItem
   */
  @column()
  public amountValue: number

  /**
   *
   *
   * @type {BelongsTo<typeof Order>}
   * @memberof OrderItem
   */
  @belongsTo(() => Order)
  public order: BelongsTo<typeof Order>
}
