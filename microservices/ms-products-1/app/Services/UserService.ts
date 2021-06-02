import User from 'App/Models/User'
import Event from '@ioc:Adonis/Core/Event'
import { Exception } from '@poppinss/utils'

/**
 *
 *
 * @export
 * @class UserService
 */
export default class UserService {
  /**
   *
   *
   * @static
   * @return {*}  {Promise<User[]>}
   * @memberof UserService
   */
  public static async index(): Promise<User[]> {
    const users = await User.all()

    Event.emit('new:user', users[0])

    return users
  }

  /**
   *
   *
   * @param {Record<string, string>} body
   * @return {*}  {Promise<User>}
   * @memberof UserService
   */
  public static async store(body: Record<string, string>): Promise<User> {
    delete body['confirm-password']

    const user = await User.create(body)

    Event.emit('new:user', user)

    return user
  }
}
