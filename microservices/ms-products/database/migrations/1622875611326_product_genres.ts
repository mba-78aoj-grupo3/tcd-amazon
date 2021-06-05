import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductGenres extends BaseSchema {
  protected tableName = 'products_genres'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
      table.string('description')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
