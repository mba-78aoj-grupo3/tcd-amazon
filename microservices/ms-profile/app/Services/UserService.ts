import User from 'App/Models/User'
import Event from '@ioc:Adonis/Core/Event'
import { Exception } from '@poppinss/utils'
import WishItem from 'App/Models/WishItem'

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
   * @static
   * @return {*}  {Promise<User[]>}
   * @memberof UserService
   */
  public static async show(id: number): Promise<User | null> {
    const users = await User.find(id)

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

  /**
   *
   *
   * @static
   * @param {number} id
   * @return {*}  {(Promise<User | null>)}
   * @memberof UserService
   */
  public static async wishList(id: number): Promise<User | null> {
    const user = await User.find(id)

    await user?.load('wishList')

    return user
  }

  /**
   *
   *
   * @static
   * @param {number} id
   * @param {Record<string, any>} body
   * @return {*}  {(Promise<WishItem | null | string>)}
   * @memberof UserService
   */
  public static async wishItemCreate(
    id: number,
    body: Record<string, any>
  ): Promise<WishItem | null> {
    // const user = await User.find(id)

    // if (user === null) return 'Usuário não encontrado.'

    return await WishItem.create(body)
  }
}
