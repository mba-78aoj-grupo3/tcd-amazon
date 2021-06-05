import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ProductGenre from 'App/Models/ProductGenre'
import ProductGenreService from 'App/Services/ProductGenreService'
import ProductCreateValidator from 'App/Validators/ProductCreateValidator'

/**
 *
 *
 * @export
 * @class ProductGenreController
 */
export default class ProductGenreController {
  /**
   *
   *
   * @return {*}  {Promise<ProductGenre[]>}
   * @memberof ProductGenreController
   */
  public async index(ctx: HttpContextContract): Promise<ProductGenre[]> {
    return await ProductGenreService.index(ctx.request.qs())
  }

  /**
   *
   *
   * @return {*}  {Promise<ProductGenre[]>}
   * @memberof ProductGenreController
   */
  public async show(ctx: HttpContextContract): Promise<ProductGenre | null> {
    const id = ctx.params?.id as number

    return await ProductGenreService.show(id)
  }

  /**
   *
   *
   * @param {HttpContextContract} ctx
   * @return {*}  {Promise<ProductGenre>}
   * @memberof ProductGenreController
   */
  public async store(ctx: HttpContextContract): Promise<ProductGenre> {
    await ctx.request.validate(ProductCreateValidator)

    return await ProductGenreService.store(ctx.request.body())
  }
}
