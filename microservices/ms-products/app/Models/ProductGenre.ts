import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

import Product from './Product'

/**
 *
 *
 * @export
 * @class ProductGenre
 * @extends {BaseModel}
 */
export default class ProductGenre extends BaseModel {
  /**
   *
   *
   * @static
   * @memberof ProductGenre
   */
  public static table = 'products_genres'

  /**
   *
   *
   * @type {number}
   * @memberof ProductGenre
   */
  @column({ isPrimary: true })
  public id: number

  /**
   *
   *
   * @type {DateTime}
   * @memberof ProductGenre
   */
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  /**
   *
   *
   * @type {DateTime}
   * @memberof ProductGenre
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  /**
   *
   *
   * @type {string}
   * @memberof ProductGenre
   */
  @column()
  public description: string

  /**
   *
   *
   * @type {HasMany<typeof Product>}
   * @memberof ProductGenre
   */
  @hasMany(() => Product)
  public product: HasMany<typeof Product>
}
