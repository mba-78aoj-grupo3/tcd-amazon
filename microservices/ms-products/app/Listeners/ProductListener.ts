import { EventsList } from '@ioc:Adonis/Core/Event'
import ProductService from 'App/Services/ProductService'

export default class ProductListener {
  public async onNewViewProduct(product: EventsList['view:product']) {
    const views = product.views + 1

    ProductService.update(product.id, { views })
  }
}
