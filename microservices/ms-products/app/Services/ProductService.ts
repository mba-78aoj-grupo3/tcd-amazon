import Product from 'App/Models/Product'
import Event from '@ioc:Adonis/Core/Event'
import { Exception } from '@poppinss/utils'

/**
 *
 *
 * @export
 * @class ProductService
 */
export default class ProductService {
  /**
   *
   *
   * @static
   * @return {*}  {Promise<Product[]>}
   * @memberof ProductService
   */
  public static async index(): Promise<Product[]> {
    const products = await Product.all()

    return products
  }

  /**
   *
   *
   * @static
   * @param {number} id
   * @return {*}  {(Promise<Product | null>)}
   * @memberof ProductService
   */
  public static async show(id: number): Promise<Product | null> {
    const product = await Product.find(id)

    return product
  }

  /**
   *
   *
   * @param {Record<string, string>} body
   * @return {*}  {Promise<Product>}
   * @memberof ProductService
   */
  public static async store(body: Record<string, string>): Promise<Product> {
    const user = await Product.create(body)

    Event.emit('new:product', user)

    return user
  }
}
