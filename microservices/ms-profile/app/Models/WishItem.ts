import { DateTime } from 'luxon'

import User from './User'
import Product from './Product'
import { column, BaseModel, hasMany, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

export default class WishItem extends BaseModel {
  /**
   *
   *
   * @static
   * @memberof WishItem
   */
  public static table = 'wishes_items'

  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public userId: number

  @column()
  public productId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Product)
  public product: BelongsTo<typeof Product>
}
