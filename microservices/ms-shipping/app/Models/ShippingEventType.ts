import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

import ShippingEvent from './ShippingEvent'

export default class ShippingEventType extends BaseModel {
  public static table = 'shippings_events_types'

  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public description: string

  @hasMany(() => ShippingEvent)
  public shippingEvents: HasMany<typeof ShippingEvent>
}
