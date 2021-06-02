/**
 * Contract source: https://git.io/Jfefs
 *
 * Feel free to let us know via PR, if you find something broken in this contract
 * file.
 */

export default interface ConsulConfig {
  // /**
  //  *
  //  *
  //  * @memberof ConsulConfig
  //  */
  // private registry(): void

  /**
   *
   *
   * @param {string} key
   * @return {*}  {Promise<any>}
   * @memberof ConsulConfig
   */
  get(key: string): Promise<any>

  /**
   *
   *
   * @param {string} key
   * @param {string} [defaultValue]
   * @return {*}  {Promise<any>}
   * @memberof ConsulConfig
   */
  get(key: string, defaultValue?: string): Promise<any>
}
