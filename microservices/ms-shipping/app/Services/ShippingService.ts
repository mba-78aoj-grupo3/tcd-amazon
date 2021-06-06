import Shipping from 'App/Models/Shipping'
import Event from '@ioc:Adonis/Core/Event'
import ShippingEventType from 'App/Models/ShippingEventType'
import ShippingEvent from 'App/Models/ShippingEvent'
import { calculateLatitudinalDistance, transformAddressToLatLog } from 'Config/maps'

/**
 *
 *
 * @export
 * @class ShippingService
 */
export default class ShippingService {
  /**
   *
   *
   * @static
   * @return {*}  {Promise<Shipping[]>}
   * @memberof ShippingService
   */
  public static async index(): Promise<Shipping[]> {
    const shipping = await Shipping.query().preload('shippingEvents', (query) => {
      query.preload('shippingEventType')
    })

    return shipping
  }

  /**
   *
   *
   * @static
   * @param {number} id
   * @return {*}  {(Promise<Shipping | null>)}
   * @memberof ShippingService
   */
  public static async show(id: number): Promise<Shipping | null> {
    const shipping = await Shipping.query()
      .preload('shippingEvents', (query) => {
        query.preload('shippingEventType')
      })
      .where('id', '=', id)
      .first()

    return shipping
  }

  /**
   *
   *
   * @param {Record<string, string>} body
   * @return {*}  {Promise<Shipping>}
   * @memberof ShippingService
   */
  public static async store(body: Record<string, string>): Promise<Shipping> {
    const shipping = await Shipping.create(body)

    return shipping
  }

  /**
   *
   *
   * @param {Record<string, string>} body
   * @return {*}  {Promise<Shipping>}
   * @memberof ShippingService
   */
  public static async changeStatus(id: number, body: Record<string, any>): Promise<Shipping | any> {
    const shipping = await Shipping.find(id)

    await shipping?.load('shippingEvents')

    if (!shipping) return 'Envio não encontrado'

    if (
      shipping.shippingEvents[shipping.shippingEvents?.length - 1]?.shippingEventTypeId ===
      body.shipping_event_type_id
    ) {
      return 'Você precisa alterar para um status diferente do último.'
    }

    const shippingEventType = await ShippingEventType.find(body.shipping_event_type_id)

    if (!shippingEventType) return 'Status do envio não encontrado'

    await ShippingEvent.create({
      shippingId: shipping.id,
      shippingEventTypeId: shippingEventType.id,
    })

    const response = await Shipping.query()
      .preload('shippingEvents', (query) => {
        query.preload('shippingEventType')
      })
      .first()

    Event.emit(
      'change:shippingEvent',
      (response as Shipping).shippingEvents[(response as Shipping).shippingEvents?.length - 1]
        .shippingEventTypeId
    )

    return response
  }

  /**
   *
   *
   * @static
   * @param {*} originPostcode
   * @param {*} receiverPostcode
   * @return {*}  {Promise<any>}
   * @memberof ShippingService
   */
  public static async calculate(originPostcode, receiverPostcode): Promise<any> {
    const originLatLon = await transformAddressToLatLog(originPostcode).catch((error) => {
      console.log(error)
    })

    if (!originLatLon) return 'CEP de origem informado, não está correto'

    const receiverLatLon = await transformAddressToLatLog(receiverPostcode).catch((error) => {
      console.log(error)
    })

    if (!receiverLatLon) return 'CEP de destino informado, não está correto'

    const distance = calculateLatitudinalDistance(
      [originLatLon.lat, originLatLon.lng],
      [receiverLatLon.lat, receiverLatLon.lng]
    )

    return { shipping_value: `R$: ${(distance * 3).toFixed(2)}` }
  }
}
