import Event from '@ioc:Adonis/Core/Event'

import ProductGenre from 'App/Models/ProductGenre'

/**
 *
 *
 * @export
 * @class ProductGenreService
 */
export default class ProductGenreService {
  /**
   *
   *
   * @static
   * @return {*}  {Promise<ProductGenre[]>}
   * @memberof ProductGenreService
   */
  public static async index(qs: Record<string, any>): Promise<ProductGenre[]> {
    const productsGenres = await ProductGenre.query().preload('product')

    return productsGenres
  }

  /**
   *
   *
   * @static
   * @param {number} id
   * @return {*}  {(Promise<ProductGenre | null>)}
   * @memberof ProductGenreService
   */
  public static async show(id: number): Promise<ProductGenre | any> {
    const productsGenre = await ProductGenre.find(id)

    await productsGenre?.load('product')

    return {
      data: {
        attributes: productsGenre,
      },
    }
  }

  /**
   *
   *
   * @param {Record<string, string>} body
   * @return {*}  {Promise<ProductGenre>}
   * @memberof ProductGenreService
   */
  public static async store(body: Record<string, string>): Promise<ProductGenre> {
    const productGenre = await ProductGenre.create(body)

    return productGenre
  }
}
