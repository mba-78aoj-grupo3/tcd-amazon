import Order from 'App/Models/Order'
import OrderEvent from 'App/Models/OrderEvent'
import Product from 'App/Models/Product'

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
  public static async history(id: number): Promise<Order | any> {
    const order = await Order.query()
      .preload('lastEventType')
      .preload('orderItems')
      .preload('orderEvent', (orderEventQuery) => {
        orderEventQuery.preload('orderEventType')
      })
      .where('id', '=', id)
      .first()

    if (order?.orderItems === undefined) {
      return order !== null ? order : {}
    }

    const product = new Product()

    await Promise.all(
      (order as Order).orderItems.map(async (orderItem) => {
        const result = await product.find(orderItem.productId).getContent()
        orderItem.product = result

        return orderItem
      })
    )

    return order
  }

  public static async updateOrderEvent(orderId: number, body: Record<string, any>): Promise<any> {
    const order = await Order.find(orderId)

    if (!order) return 'Pedido não encontrado.'

    await OrderEvent.create(body)

    await order.load('orderEvent')

    return order
  }
}
