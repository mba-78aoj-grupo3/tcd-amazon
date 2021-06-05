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
  public static async search(qs: Record<string, any>): Promise<Product[] | any> {
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

    if (product) {
      Event.emit('view:product', product)
    }

    return {
      data: {
        attributes: product,
      },
    }
  }

  /**
   *
   *
   * @static
   * @param {Record<string, any>} body
   * @return {*}  {Promise<Product>}
   * @memberof ProductService
   */
  public static async store(body: Record<string, any>): Promise<Product> {
    delete body['views']

    const product = await Product.create(body)

    Event.emit('new:product', product)

    return product
  }

  /**
   *
   *
   * @static
   * @param {number} id
   * @param {Record<string, any>} body
   * @return {*}  {(Promise<Product | any>)}
   * @memberof ProductService
   */
  public static async update(id: number, body: Record<string, any>): Promise<Product | any> {
    const product = await Product.find(id)

    if (!product) return 'Produto não encontrado.'

    product.views = body.views

    product.save()

    return product
  }
}
