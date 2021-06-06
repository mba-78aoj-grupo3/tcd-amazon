import Event from '@ioc:Adonis/Core/Event'

import ProductCategory from 'App/Models/ProductCategory'

/**
 *
 *
 * @export
 * @class ProductCategoryService
 */
export default class ProductCategoryService {
  /**
   *
   *
   * @static
   * @return {*}  {Promise<ProductCategory[]>}
   * @memberof ProductCategoryService
   */
  public static async index(qs: Record<string, any>): Promise<ProductCategory[]> {
    // const limit = qs.qtd_per_category ? qs.qtd_per_category : 3

    const productsCategories = await ProductCategory.query().preload('product', (productQuery) => {
      productQuery.orderBy('views', 'desc')
    })

    return productsCategories
  }

  /**
   *
   *
   * @static
   * @param {number} id
   * @return {*}  {(Promise<ProductCategory | null>)}
   * @memberof ProductCategoryService
   */
  public static async show(id: number): Promise<ProductCategory | any> {
    const productsCategory = await ProductCategory.find(id)

    return {
      data: {
        attributes: productsCategory,
      },
    }
  }

  /**
   *
   *
   * @param {Record<string, string>} body
   * @return {*}  {Promise<ProductCategory>}
   * @memberof ProductCategoryService
   */
  public static async store(body: Record<string, string>): Promise<ProductCategory> {
    const productCategory = await ProductCategory.create(body)

    Event.emit('new:product.category', productCategory)

    return productCategory
  }
}
