import Product from 'App/Models/Product'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProductCreateValidator from 'App/Validators/ProductCreateValidator'
import ProductService from 'App/Services/ProductService'

/**
 *
 *
 * @export
 * @class ProductController
 */
export default class ProductController {
  /**
   *
   *
   * @return {*}  {Promise<Product[]>}
   * @memberof ProductController
   */
  public async index(): Promise<Product[]> {
    return await ProductService.index()
  }

  /**
   *
   *
   * @return {*}  {Promise<Product[]>}
   * @memberof ProductController
   */
  public async search(ctx: HttpContextContract): Promise<Product[]> {
    return await ProductService.search(ctx.request.qs())
  }

  /**
   *
   *
   * @return {*}  {Promise<Product[]>}
   * @memberof ProductController
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
   * @memberof ProductController
   */
  public async store(ctx: HttpContextContract): Promise<Product> {
    await ctx.request.validate(ProductCreateValidator)

    return await ProductService.store(ctx.request.body())
  }
}
