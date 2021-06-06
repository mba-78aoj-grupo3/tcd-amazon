import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import WishItem from '../../app/Models/WishItem'

export default class WishItemSeeder extends BaseSeeder {
  public async run () {
    await WishItem.createMany([
      {
        userId: 1,
        productId: 2,
      },
      {
        userId: 1,
        productId: 2,
      },
      {
        userId: 1,
        productId: 3,
      },
      {
        userId: 2,
        productId: 3,
      },
      {
        userId: 2,
        productId: 2,
      },
      {
        userId: 2,
        productId: 1,
      },
      {
        userId: 3,
        productId: 3,
      },
      {
        userId: 3,
        productId: 1,
      },
      {
        userId: 4,
        productId: 2,
      },
    ])
  }
}
