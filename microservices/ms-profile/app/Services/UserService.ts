import User from 'App/Models/User'
import Event from '@ioc:Adonis/Core/Event'
import { Exception } from '@poppinss/utils'
import WishItem from 'App/Models/WishItem'
import Product from 'App/Models/Product'

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
  public async wishList(id: number): Promise<any> {
    const user = await User.find(id)

    await user?.load('wishList')

    if (user?.wishList === undefined) return []

    const product = new Product()

    return await Promise.all(
      (user as User).wishList.map(async (wishItem) => {
        const result = await product.find(wishItem.productId).getContent()

        return this.setWishList(wishItem, result)
      })
    )
  }

  /**
   *
   *
   * @param {*} item
   * @param {*} product
   * @return {*}
   * @memberof UserService
   */
  public setWishList(item: any, product: any): Record<string, any> {
    const wishItem: any = {}

    wishItem.id = item.id
    wishItem.created_at = item.createdAt
    wishItem.updated_at = item.updatedAt
    wishItem.user_id = item.userId
    wishItem.product_id = item.productId
    wishItem.product = product

    return wishItem
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
  ): Promise<WishItem | any> {
    const user = await User.find(id)

    if (user === null) return 'Usuário não encontrado.'

    const product = await new Product().find(body.product_id).getContent()

    if (product.id === undefined) return 'Produto não encontrado.'

    body.user_id = id

    return await WishItem.create(body)
  }
}
