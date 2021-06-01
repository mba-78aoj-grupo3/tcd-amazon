import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OrdersItems extends BaseSchema {
  protected tableName = 'orders_items'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.integer('order_id')
      table.integer('product_id')
      table.integer('quantity')
      table.integer('amount_value')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
