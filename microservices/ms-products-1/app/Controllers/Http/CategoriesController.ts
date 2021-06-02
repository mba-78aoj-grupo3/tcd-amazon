import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Product from 'App/Models/Category'
import CategoryService from 'App/Services/CategoryService'

/**
 *
 *
 * @export
 * @class CategoriesController
 */
export default class CategoriesController {
  /**
   *
   *
   * @return {*}  {Promise<Product[]>}
   * @memberof CategoriesController
   */
  public async index(ctx: HttpContextContract): Promise<Product[]> {
    return await CategoryService.index()
  }

  /**
   *
   *
   * @param {HttpContextContract} ctx
   * @return {*}  {(Promise<Product | null>)}
   * @memberof CategoriesController
   */
  public async show(ctx: HttpContextContract): Promise<Product | null> {
    const id = ctx.params.id as number

    return await CategoryService.show(id)
  }

  /**
   *
   *
   * @param {HttpContextContract} ctx
   * @return {*}  {Promise<Product>}
   * @memberof CategoriesController
   */
  public async store(ctx: HttpContextContract): Promise<Product> {
    await ctx.request.validate(ProductCreateValidator)

    return await CategoryService.store(ctx.request.body())
  }
}