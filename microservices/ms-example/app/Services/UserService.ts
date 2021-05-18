import User from 'App/Models/User'
import Event from '@ioc:Adonis/Core/Event'

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
