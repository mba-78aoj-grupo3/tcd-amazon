import { DateTime } from 'luxon'
import OrderItem from './OrderItem'
import { column, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

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
  public orderStatusId: number

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
   * @type {HasMany<typeof OrderItem>}
   * @memberof Order
   */
  @hasMany(() => OrderItem)
  public orderItems: HasMany<typeof OrderItem>
}
