import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from '../../app/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'joao@gmail.com',
        password: '123456',
      },
      {
        email: 'carlos@gmail.com',
        password: '123456',
      },
      {
        email: 'gustavoivo@gmail.com',
        password: '123456',
      },
      {
        email: 'gustavotiago@gmail.com',
        password: '123456',
      },
    ])
  }
}
