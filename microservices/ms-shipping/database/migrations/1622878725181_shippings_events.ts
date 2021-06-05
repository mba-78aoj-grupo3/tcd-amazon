import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ShippingsEvents extends BaseSchema {
  protected tableName = 'shippings_events'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.integer('shipping_id')
      table.integer('shipping_event_type_id')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
