import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class ProductSeeder extends BaseSeeder {
  public async run() {
    await Product.createMany([
      {
        name: 'Sonic 2',
        description: 'Sega of america',
        price: 696,
        productCategoryId: 1,
        productGenreId: 1,
        views: 0,
      },
      {
        name: 'Café Baggio',
        description: 'Café torrado e moido Aramoa de chocolate',
        price: 1990,
        productCategoryId: 5,
        productGenreId: 1,
        views: 0,
      },
      {
        name: 'Café Lavazza',
        description: 'Capsulas de café espresso',
        price: 2120,
        productCategoryId: 5,
        productGenreId: 1,
        views: 0,
      },
      {
        name: 'Capsula de chá',
        description: 'Com gengibre e Aroma Selezione',
        price: 1000,
        productCategoryId: 5,
        productGenreId: 1,
        views: 0,
      },
      {
        name: 'Difusor Aromatizador',
        description: 'Difusor Aromatizador com controle remoto',
        price: 11226,
        productCategoryId: 4,
        productGenreId: 8,
        views: 0,
      },
      {
        name: 'Oleo Essencial',
        description: 'Oleo essencial de tangerina 10ml',
        price: 2246,
        productCategoryId: 4,
        productGenreId: 8,
        views: 0,
      },
    ])
  }
}
