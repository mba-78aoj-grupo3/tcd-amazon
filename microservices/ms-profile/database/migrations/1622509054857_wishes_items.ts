import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class WishesItemSchema extends BaseSchema {
  protected tableName = 'wishes_items'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.integer('user_id')
      table.integer('product_id')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
