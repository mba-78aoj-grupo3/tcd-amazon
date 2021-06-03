import { DateTime } from 'luxon'
import { column, BaseModel, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import ProductCategory from './ProductCategory'

export default class Product extends BaseModel {
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column({ columnName: 'product_category_id' })
  public productCategoryId: number

  @column()
  public price: number

  @column()
  public jsonData?: string

  @belongsTo(() => ProductCategory)
  public productCategory: BelongsTo<typeof ProductCategory>
}
