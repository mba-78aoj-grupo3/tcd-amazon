import User from 'App/Models/User'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserCreateValidator from 'App/Validators/UserCreateValidator'
import UserService from 'App/Services/UserService'

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
    return await UserService.index()
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

    return await UserService.store(ctx.request.body())
  }
}
