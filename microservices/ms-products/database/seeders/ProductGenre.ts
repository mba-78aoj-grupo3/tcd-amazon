import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ProductGenre from 'App/Models/ProductGenre'

export default class ProductGenreSeeder extends BaseSeeder {
  public async run() {
    await ProductGenre.createMany([
      {
        description: 'Comunicação',
      },
      {
        description: 'Estilo de vida',
      },
      {
        description: 'Negócios',
      },
      {
        description: 'Redes sociais',
      },
      {
        description: 'Café, Chá Expresso',
      },
      {
        description: 'Cerveja e Vinho',
      },
      {
        description: 'Utensilios Domésticos',
      },
      {
        description: 'Bem-Estar',
      },
      {
        description: 'Dieta e Nutrição',
      },
    ])
  }
}
