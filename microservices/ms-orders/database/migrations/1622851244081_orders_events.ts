import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OrdersEvents extends BaseSchema {
  protected tableName = 'orders_events'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.integer('order_id')
      table.integer('order_event_type_id')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
