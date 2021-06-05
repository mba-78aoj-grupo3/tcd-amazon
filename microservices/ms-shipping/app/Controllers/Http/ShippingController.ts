import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Shipping from 'App/Models/Shipping'
import ShippingService from 'App/Services/ShippingService'
import ShippingCreateValidator from 'App/Validators/ShippingCreateValidator'

/**
 *
 *
 * @export
 * @class ShippingController
 */
export default class ShippingController {
  /**
   *
   *
   * @return {*}  {Promise<Shipping[]>}
   * @memberof ShippingController
   */
  public async index(ctx: HttpContextContract): Promise<Shipping[]> {
    return await ShippingService.index()
  }

  /**
   *
   *
   * @param {HttpContextContract} ctx
   * @return {*}  {(Promise<Shipping | null>)}
   * @memberof ShippingController
   */
  public async show(ctx: HttpContextContract): Promise<Shipping | null> {
    const id = ctx.params.id as number

    return await ShippingService.show(id)
  }

  /**
   *
   *
   * @param {HttpContextContract} ctx
   * @return {*}  {Promise<Shipping>}
   * @memberof ShippingController
   */
  public async store(ctx: HttpContextContract): Promise<Shipping> {
    await ctx.request.validate(ShippingCreateValidator)

    return await ShippingService.store(ctx.request.body())
  }

  /**
   *
   *
   * @param {HttpContextContract} ctx
   * @return {*}  {Promise<Shipping>}
   * @memberof ShippingController
   */
  public async changeStatus(ctx: HttpContextContract): Promise<Shipping> {
    const id = ctx.params.id as number

    return await ShippingService.changeStatus(id, ctx.request.body())
  }

  /**
   *
   *
   * @param {HttpContextContract} ctx
   * @return {*}  {Promise<any>}
   * @memberof ShippingController
   */
  public async calculate(ctx: HttpContextContract): Promise<any> {
    const originPostcode = ctx.request.qs().origin_postcode
    const receiverPostcode = ctx.request.qs().receiver_postcode
    console.log(originPostcode, receiverPostcode)
    if (!originPostcode || !receiverPostcode) return 'Informe os parametros corretamente'

    return await ShippingService.calculate(originPostcode, receiverPostcode)
  }
}
