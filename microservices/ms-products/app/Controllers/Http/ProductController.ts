import Product from 'App/Models/Product'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProductCreateValidator from 'App/Validators/ProductCreateValidator'
import ProductService from 'App/Services/ProductService'

/**
 *
 *
 * @export
 * @class ProductsController
 */
export default class ProductController {
  /**
   *
   *
   * @return {*}  {Promise<Product[]>}
   * @memberof ProductsController
   */
  public async index(ctx: HttpContextContract): Promise<Product[]> {
    return await ProductService.index(ctx.request.qs())
  }

  /**
   *
   *
   * @return {*}  {Promise<Product[]>}
   * @memberof ProductsController
   */
  public async show(ctx: HttpContextContract): Promise<Product | null> {
    const id = ctx.params?.id as number

    return await ProductService.show(id)
  }

  /**
   *
   *
   * @param {HttpContextContract} ctx
   * @return {*}  {Promise<Product>}
   * @memberof ProductsController
   */
  public async store(ctx: HttpContextContract): Promise<Product> {
    await ctx.request.validate(ProductCreateValidator)

    return await ProductService.store(ctx.request.body())
  }
}
