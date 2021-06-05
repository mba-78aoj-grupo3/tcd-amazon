import Env from '@ioc:Adonis/Core/Env'
// import Logger from '@ioc:Adonis/Core/Logger'
import Consul, { Consul as IConsul } from 'consul'

/**
 *
 *
 * @export
 * @class ConsulConfig
 */
export default class ConsulConfig {
  /**
   *
   *
   * @private
   * @type {IConsul}
   * @memberof ConsulConfig
   */
  private consul: IConsul

  /**
   * Creates an instance of ConsulConfig.
   * @memberof ConsulConfig
   */
  constructor() {
    this.consul = new Consul({
      host: Env.get('CONSUL_SERVER'),
      port: Env.get('CONSUL_PORT'),
      promisify: true,
    })

    this.registry()
  }

  /**
   *
   *
   * @private
   * @memberof ConsulConfig
   */
  private registry(): void {
    this.consul.agent.service.register(
      {
        name: Env.get('APP_NAME'),
        address: Env.get('HOST'),
        port: Env.get('PORT'),
        check: {
          http: Env.get('APP_URI') + '/health',
          interval: '10s',
        },
      },
      (err, res) => {
        if (err) {
          // Logger.error('Erro ao registrar o Consul.')
          console.log('Consul error: ', err)
          // throw err
        } else {
          console.log(res)
          // Logger.info('Consul iniciado com sucesso!', res)
        }
      }
    )
  }

  /**
   *
   *
   * @param {string} key
   * @param {string} [defaultValue]
   * @return {*}
   * @memberof ConsulConfig
   */
  public async get(key: string, defaultValue?: string): Promise<any> {
    const result: string = await this.consul.kv.get<string>(key)

    if (result) {
      return JSON.parse(result)
    }

    return defaultValue
  }
}
