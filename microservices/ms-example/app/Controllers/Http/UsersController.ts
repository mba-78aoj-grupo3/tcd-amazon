import User from 'App/Models/User'
import Event from '@ioc:Adonis/Core/Event'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserCreateValidator from 'App/Validators/UserCreateValidator'

/**
 *
 *
 * @export
 * @class UsersController
 */
export default class UsersController {
  /**
   *
   *
   * @return {*}  {Promise<User[]>}
   * @memberof UsersController
   */
  public async index(ctx: HttpContextContract): Promise<User[]> {
    const user = await User.all()

    Event.emit('new:user', user[0])
    return user
  }

  /**
   *
   *
   * @param {HttpContextContract} ctx
   * @return {*}  {Promise<User>}
   * @memberof UsersController
   */
  public async store(ctx: HttpContextContract): Promise<User> {
    await ctx.request.validate(UserCreateValidator)

    const body = ctx.request.body()

    delete body['confirm-password']

    const user = await User.create(ctx.request.body())

    Event.emit('new:user', user)

    return user
  }
}
