import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Shippings extends BaseSchema {
  protected tableName = 'shippings'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('name')
      table.string('description')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
