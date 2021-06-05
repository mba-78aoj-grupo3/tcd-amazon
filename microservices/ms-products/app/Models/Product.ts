import { DateTime } from 'luxon'
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import ProductGenre from './ProductGenre'
import ProductCategory from './ProductCategory'

/**
 *
 *
 * @export
 * @class Product
 * @extends {BaseModel}
 */
export default class Product extends BaseModel {
  /**
   *
   *
   * @type {DateTime}
   * @memberof Product
   */
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  /**
   *
   *
   * @type {DateTime}
   * @memberof Product
   */
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  /**
   *
   *
   * @type {number}
   * @memberof Product
   */
  @column({ isPrimary: true })
  public id: number

  /**
   *
   *
   * @type {string}
   * @memberof Product
   */
  @column()
  public name: string

  /**
   *
   *
   * @type {string}
   * @memberof Product
   */
  @column()
  public description: string

  /**
   *
   *
   * @type {number}
   * @memberof Product
   */
  @column()
  public productCategoryId: number

  /**
   *
   *
   * @type {number}
   * @memberof Product
   */
  @column()
  public productGenreId: number

  /**
   *
   *
   * @type {number}
   * @memberof Product
   */
  @column()
  public price: number

  /**
   *
   *
   * @type {number}
   * @memberof Product
   */
  @column()
  public views: number

  /**
   *
   *
   * @type {string}
   * @memberof Product
   */
  @column()
  public jsonData?: string

  /**
   *
   *
   * @type {BelongsTo<typeof ProductCategory>}
   * @memberof Product
   */
  @belongsTo(() => ProductCategory)
  public productCategory: BelongsTo<typeof ProductCategory>

  /**
   *
   *
   * @type {BelongsTo<typeof ProductGenre>}
   * @memberof Product
   */
  @belongsTo(() => ProductGenre)
  public productGenre: BelongsTo<typeof ProductGenre>
}
