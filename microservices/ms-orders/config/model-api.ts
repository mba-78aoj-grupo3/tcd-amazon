import axios from 'axios'
import { Model } from '../kernel/api'
import { circuitBreakerOpossum } from './circuitBreak'

/**
 *
 *
 * @export
 * @class BaseApiModel
 * @extends {Model}
 */
export default class BaseApiModel extends Model {
  /**
   *
   *
   * @type {string}
   * @memberof BaseApiModel
   */
  public baseUrl: string = ''

  /**
   *
   *
   * @readonly
   * @memberof BaseApiModel
   */
  public get fields() {
    return ['']
  }

  /**
   *
   *
   * @readonly
   * @memberof BaseApiModel
   */
  public get relationshipNames() {
    return ['']
  }

  /**
   *
   *
   * @param {*} config
   * @return {*}  {Promise<void>}
   * @memberof BaseApiModel
   */
  public async request(config: any): Promise<any> {
    return circuitBreakerOpossum.fire(config.url, config)
  }
}
