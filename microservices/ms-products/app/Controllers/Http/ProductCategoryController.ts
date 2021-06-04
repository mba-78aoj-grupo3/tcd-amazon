import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ProductCategory from 'App/Models/ProductCategory'
import ProductCategoryService from 'App/Services/ProductCategoryService'
import ProductCreateValidator from 'App/Validators/ProductCreateValidator'

/**
 *
 *
 * @export
 * @class ProductCategoryController
 */
export default class ProductCategoryController {
  /**
   *
   *
   * @return {*}  {Promise<ProductCategory[]>}
   * @memberof ProductCategoryController
   */
  public async index(ctx: HttpContextContract): Promise<ProductCategory[]> {
    return await ProductCategoryService.index(ctx.request.qs())
  }

  /**
   *
   *
   * @return {*}  {Promise<ProductCategory[]>}
   * @memberof ProductCategoryController
   */
  public async show(ctx: HttpContextContract): Promise<ProductCategory | null> {
    const id = ctx.params?.id as number

    return await ProductCategoryService.show(id)
  }

  /**
   *
   *
   * @param {HttpContextContract} ctx
   * @return {*}  {Promise<ProductCategory>}
   * @memberof ProductCategoryController
   */
  public async store(ctx: HttpContextContract): Promise<ProductCategory> {
    await ctx.request.validate(ProductCreateValidator)

    return await ProductCategoryService.store(ctx.request.body())
  }
}
