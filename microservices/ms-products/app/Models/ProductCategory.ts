import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

import Product from './Product'

/**
 *
 *
 * @export
 * @class ProductCategory
 * @extends {BaseModel}
 */
export default class ProductCategory extends BaseModel {
  /**
   *
   *
   * @static
   * @memberof ProductCategory
   */
  public static table = 'products_categories'

  /**
   *
   *
   * @type {number}
   * @memberof ProductCategory
   */
  @column({ isPrimary: true })
  public id: number

  /**
   *
   *
   * @type {DateTime}
   * @memberof ProductCategory
   */
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  /**
   *
   *
   * @type {DateTime}
   * @memberof ProductCategory
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  /**
   *
   *
   * @type {string}
   * @memberof ProductCategory
   */
  @column()
  public description: string

  /**
   *
   *
   * @type {HasMany<typeof Product>}
   * @memberof ProductCategory
   */
  @hasMany(() => Product)
  public product: HasMany<typeof Product>
}
