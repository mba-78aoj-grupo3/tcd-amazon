import User from 'App/Models/User'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserCreateValidator from 'App/Validators/UserCreateValidator'
import WishItemCreateValidator from 'App/Validators/WishItemCreateValidator'
import UserService from 'App/Services/UserService'
import WishItem from 'App/Models/WishItem'

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
   * @return {*}  {Promise<User[]>}
   * @memberof UsersController
   */
  public async show(ctx: HttpContextContract): Promise<User | null> {
    const id = ctx.params.id as number

    return await UserService.show(id)
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

  /**
   *
   *
   * @param {HttpContextContract} ctx
   * @return {*}  {Promise<User>}
   * @memberof UsersController
   */
  public async wishList(ctx: HttpContextContract): Promise<User | null> {
    const id = ctx.params.id as number

    return await new UserService().wishList(id)
  }

  /**
   *
   *
   * @param {HttpContextContract} ctx
   * @return {*}  {Promise<User>}
   * @memberof UsersController
   */
  public async wishItemCreate(ctx: HttpContextContract): Promise<WishItem | null> {
    const id = ctx.params.id as number

    await ctx.request.validate(WishItemCreateValidator)

    return await UserService.wishItemCreate(id, ctx.request.body())
  }
}
