import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ProductCategory from 'App/Models/ProductCategory'

export default class ProductCategorySeeder extends BaseSeeder {
  public async run() {
    await ProductCategory.createMany([
      {
        description: 'Cozinha',
      },
      {
        description: 'Casa',
      },
      {
        description: 'Apps e Jogos',
      },
      {
        description: 'Saúde',
      },
      {
        description: 'Livros',
      },
    ])
  }
}
