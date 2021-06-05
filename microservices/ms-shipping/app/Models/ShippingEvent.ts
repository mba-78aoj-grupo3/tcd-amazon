import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import Shipping from './Shipping'
import ShippingEventType from './ShippingEventType'

export default class ShippingEvent extends BaseModel {
  public static table = 'shippings_events'

  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public shippingId: number

  @column()
  public shippingEventTypeId: number

  @belongsTo(() => Shipping)
  public shipping: BelongsTo<typeof Shipping>

  @belongsTo(() => ShippingEventType)
  public shippingEventType: BelongsTo<typeof ShippingEventType>
}
