import { DateTime } from 'luxon'
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import User from './User'
import Product from './Product'

export default class WishItem extends BaseModel {
  /**
   *
   *
   * @static
   * @memberof WishItem
   */
  public static table = 'wishes_items'

  /**
   *
   *
   * @type {number}
   * @memberof WishItem
   */
  @column({ isPrimary: true })
  public id: number

  /**
   *
   *
   * @type {DateTime}
   * @memberof WishItem
   */
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  /**
   *
   *
   * @type {DateTime}
   * @memberof WishItem
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  /**
   *
   *
   * @type {number}
   * @memberof WishItem
   */
  @column()
  public userId: number

  /**
   *
   *
   * @type {number}
   * @memberof WishItem
   */
  @column()
  public productId: number

  /**
   *
   *
   * @type {BelongsTo<typeof User>}
   * @memberof WishItem
   */
  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  /**
   *
   *
   * @type {Product}
   * @memberof WishItem
   */
  public product: Product
}
