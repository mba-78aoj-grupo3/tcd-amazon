import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import Notification from 'App/Entities/Notification'

export default class UserModel extends BaseModel {
  constructor() {
    super()

    Notification.produceEvent('productTopic', 'New user created')
  }

  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
