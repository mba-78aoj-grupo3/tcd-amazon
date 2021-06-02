import Order from 'App/Models/Order'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Orderervice from 'App/Services/OrderService'

/**
 *
 *
 * @export
 * @class OrderController
 */
export default class OrderController {
  /**
   *
   *
   * @return {*}  {Promise<Order[]>}
   * @memberof OrderController
   */
  public async history(ctx: HttpContextContract): Promise<Order[]> {
    return await Orderervice.history()
  }
}
