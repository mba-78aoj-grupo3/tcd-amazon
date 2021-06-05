import Product from 'App/Models/Product'
import Event from '@ioc:Adonis/Core/Event'

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
    const products = await Product.query().preload('productCategory')

    return products
  }

  /**
   *
   *
   * @static
   * @return {*}  {Promise<Product[]>}
   * @memberof ProductService
   */
  public static async search(qs: Record<string, any>): Promise<Product[]> {
    const products = await Product.query()
      .where('name', 'ilike', '%' + qs.search + '%')
      .orWhere('description', 'ilike', '%' + qs.search + '%')

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
  public static async show(id: number): Promise<Product | any> {
    const product = await Product.find(id)

    return {
      data: {
        attributes: product,
      },
    }
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
