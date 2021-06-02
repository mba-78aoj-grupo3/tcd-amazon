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
    const product = await Product.all()

    return product
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

    // await product?.load('assigner')
    // await product?.load('customer')
    await product?.load('productCategory')

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
    delete body['Product']

    const product = await Product.create(body)

    Event.emit('new:product', product)

    return product
  }
}
