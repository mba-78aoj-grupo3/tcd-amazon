import BaseApiModel from 'Config/model-api'

/**
 *
 *
 * @export
 * @class Product
 * @extends {BaseApiModel}
 */
export default class Product extends BaseApiModel {
  /**
   *
   *
   * @type {string}
   * @memberof Product
   */
  public baseUrl: string = 'http://192.168.0.107:3334/api'

  /**
   *
   *
   * @readonly
   * @type {string}
   * @memberof Product
   */
  public get resourceName(): string {
    return 'products'
  }

  /**
   *
   *
   * @readonly
   * @type {string[]}
   * @memberof Product
   */
  public get fields(): string[] {
    return ['name', 'description', 'product_category_id', 'price', 'json_data']
  }

  /**
   *
   *
   * @readonly
   * @type {string[]}
   * @memberof Product
   */
  public get relationshipNames(): string[] {
    return ['product_category']
  }
}
