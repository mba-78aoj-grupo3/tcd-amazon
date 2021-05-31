import { DateTime } from 'luxon'

export default class Order {
  public id: number

  public description: string

  public items: string[]

  public createdAt: DateTime

  public updatedAt: DateTime
}
