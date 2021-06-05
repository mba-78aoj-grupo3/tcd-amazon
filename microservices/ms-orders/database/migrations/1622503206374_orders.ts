import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Orders extends BaseSchema {
  protected tableName = 'orders'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.integer('customer_id')
      table.integer('last_event_type_id')
      table.integer('amount_value')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
