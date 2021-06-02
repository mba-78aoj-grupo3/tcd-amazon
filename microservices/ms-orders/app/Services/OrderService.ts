import Order from 'App/Models/Order'
import Event from '@ioc:Adonis/Core/Event'
import { Exception } from '@poppinss/utils'

/**
 *
 *
 * @export
 * @class OrderService
 */
export default class OrderService {
  /**
   *
   *
   * @static
   * @return {*}  {Promise<Order[]>}
   * @memberof OrderService
   */
  public static async history(): Promise<Order[]> {
    const orders = await Order.all()

    await orders[0].load('orderItems')

    return orders
  }
}
