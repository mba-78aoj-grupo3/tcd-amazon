import Handling from './Handling';
import { get, isEmpty } from 'lodash';
import Pagination from './Pagination';
import { ResolveArray } from '../helpers/index';
import { TypeError } from '@kernel-js/exceptions';
import QueryBuilder from '../QueryManagers/QueryBuilder';
import QueryModifier from '../QueryManagers/QueryModifier';
import { Config, ModelSignature } from '../Interfaces/index';

/**
 * Model Abstract class
 */
export abstract class Model implements ModelSignature {
    
  /**
   * @type {Handling}
   */
  protected handling: Handling;

  /**
   * @type {QueryModifier}
   */
  protected queryModifier: QueryModifier;

  /**
   * @type {QueryBuilder}
   */
  public queryBuilder: QueryBuilder;

  /**
   * @type {Number|String}
   */
  public id!: number | String;

  /**
   * @type {String}
   */
  public type!: string;

  /**
   * @type {Config}
   */
  public config!: Config;

  /**
   * @type {Any}
   */
  public attributes: any = {};

  /**
   * @type {Any}
   */
  public relationships: any = {};

  /**
   * @type {String}
   */
  get resourceName() {
    return '';
  };

  /**
   * @type {String}
   */
  abstract get baseUrl(): string;

  /**
   * @type {Array<string>}
   */
  abstract get fields(): Array<string>;

  /**
   * @type {Array<string>}
   */
  abstract get relationshipNames(): Array<string>;

  /**
   *
   */
  constructor() {
    this.queryBuilder = new QueryBuilder();
    this.queryModifier = new QueryModifier(this.resourceName);
    this.handling = new Handling();
  }

  /**
   * @returns string
   */
  protected resourceUrl(): string {
    return `${this.baseUrl}/${this.resourceName}`
  }

  /**
   * @param  {Config} config
   * @returns Promise
   */
  protected abstract request(config: Config): Promise<any>;

  /**
   * @param  {boolean=true} hydrate
   * @returns Promise
   */
  public async getEntity(hydrate:boolean = true): Promise<any> {
    return new Promise((resolve, reject) => {
      this.request(this.config)
      .then( response => {
        const res = (response.data) ? this.handling.respond(this, response.data, hydrate) : response;
        resolve(res);
      })
      .catch( response => {
        reject(response)
      });
    })
  }

  /**
   * @returns Promise
   */
  public getContent(): Promise<any> {
    return this.getEntity(false);
  }

  /**
   * @returns string
   */
  public getUrl(): string {
    return this.config.url;
  }

  /**
   * @returns string
   */
  public getUrlConfig(): Config {
    return this.config;
  }

  /**
   * @returns Model
   */
  public all(): Model {
    this.config = {
      method: 'GET',
      url: `${this.resourceUrl()}${this.queryBuilder.getQuery(this)}`,
    };

    this.queryBuilder.resetQuery(this);

    return this;
  }

  /**
   * @returns Model
   */
  public search(): Model {
    this.config = {
      method: 'GET',
      url: `${this.resourceUrl()}/search${this.queryBuilder.getQuery(this)}`,
    };

    this.queryBuilder.resetQuery(this);

    return this;
  }

  /**
   * @returns Model
   */
  public async save() {
    if (get(this, 'id')) {
      this.config = {
        method: 'PUT',
        url: `${this.resourceUrl()}/${this.id}`,
        data: this.handling.serialize(this)
      };
    } else {
      this.config = {
        method: 'POST',
        url: `${this.resourceUrl()}`,
        data: this.handling.serialize(this)
      };
    }

    this.queryBuilder.resetQuery(this);

    return this.request(this.config);
  }

  /**
   *
   *
   * @param {Array<Model>} entities
   * @return {*}  {Promise<any>}
   * @memberof Model
   */
  public attach(entities: Array<Model>): Promise<any> {
    this._mountRelationships(entities);

    this.config.method = 'PATCH';

    return this.request(this.config);
  }

  /**
   *
   *
   * @param {Array<Model>} entities
   * @return {*}  {Promise<any>}
   * @memberof Model
   */
  public detach(entities: Array<Model>): Promise<any> {
    this._mountRelationships(entities);

    this.config.method = 'PATCH';
    this.config.data = {data: []};

    return this.request(this.config);
  }

  /**
   *
   *
   * @param {Array<Model>} entities
   * @return {*}  {Promise<any>}
   * @memberof Model
   */
  public createPivot(entities: Array<Model>): Promise<any> {
    this._mountRelationships(entities);

    this.config.method = 'POST';

    return this.request(this.config);
  }

  /**
   *
   *
   * @param {Array<Model>} entities
   * @return {*}  {Promise<any>}
   * @memberof Model
   */
  public deletePivot(entities: Array<Model>): Promise<any> {
    this._mountRelationships(entities);

    this.config.method = 'DELETE';

    return this.request(this.config);
  }

  /**
   *
   *
   * @private
   * @param {...Array<Model>} entities
   * @memberof Model
   */
  private _mountRelationships(entities: Array<Model>): void {
    const type = get(entities[0], 'resourceName');

    if (isEmpty(type) || entities.some((entity) => entity.resourceName !== type)) {
      throw new TypeError(`The entities must be of the same type `, 422);
    }

    this.relationships['data'] = entities.map((entity) => {
      return {
        type: entity.resourceName.toLowerCase(),
        id: entity.id,
      };
    });

    this.config = {
      method: '',
      url: `${this.resourceUrl()}/${this.id}/relationships/${type.toLowerCase()}`,
      data: this.handling.serialize(this)
    };

    this.queryBuilder.resetQuery(this);
  }

  /**
   * @param  {number|string} id
   * @returns Model
   */
  public find(id: number | string): Model {
    if (typeof id !== 'number' && typeof id !== 'string') {
      throw new TypeError(`Argument 1 passed must be of the type number or string, ${typeof id} given`, 500);
    }

    this.config = {
      method: 'GET',
      url: `${this.resourceUrl()}/${id}${this.queryBuilder.getQuery(this)}`
    };

    this.queryBuilder.resetQuery(this);

    return this;
  }

  /**
   * @returns Model
   */
  public delete(): Model {
    this.config = {
      method: 'DELETE',
      url: `${this.resourceUrl()}/${this.id}`
    };

    this.queryBuilder.resetQuery(this);

    return this;
  }

  /**
   * @param  {number} perPage
   * @param  {number} page
   * @returns Model
   */
  public paginate(perPage: number, page: number): Promise<any> {
    if (typeof perPage !== 'number') {
      throw new TypeError(`Argument 1 passed must be of the type number, ${typeof this.id} given`, 500);
    }

    if (typeof page !== 'number') {
      throw new TypeError(`Argument 2 passed must be of the type number, ${typeof this.id} given`, 500);
    }

    this.queryBuilder.pagination = {
      size: perPage,
      number: page
    }

    this.config = {
      method: 'GET',
      url: `${this.resourceUrl()}${this.queryBuilder.getQuery(this)}`
    };

    this.queryBuilder.resetQuery(this);

    return new Promise((resolve, reject) => {
      this.request(this.config)
      .then( response => {
        const pagination = response.data.meta.pagination;
        const res = (response.data) ? this.handling.respond(this, response.data, false) : response;

        resolve(new Pagination(pagination, res));
      })
      .catch( response => {
        reject(response)
      });
    })
  }

  /**
   * @param  {Array<string>} ...includes
   * @returns Model
   */
  @ResolveArray()
  public with(...includes: Array<string>): Model {
    this.queryBuilder.includes = this.queryModifier.include(includes)
    return this;
  }

  /**
   * @param  {Array<string>} ...fields
   * @returns Model
   */
  @ResolveArray()
  public select(...fields: Array<string>): Model {
    this.queryBuilder.fields = this.queryModifier.select(fields);
    return this;
  }

  /**
   * @param  {Array<string>} ...column
   * @returns Model
   */
  @ResolveArray()
  public orderByAsc(...column: Array<string>): Model {
    this._orderBy('asc', ...column);
    return this;
  }

  /**
   * @param  {Array<string>} ...column
   * @returns Model
   */
  @ResolveArray()
  public orderByDesc(...column: Array<string>): Model {
    this._orderBy('desc', ...column);
    return this;
  }

  /**w
   * @param  {string} key
   * @param  {string} value
   * @returns Model
   */
  public where(key: string, value: string): Model {
    this.queryBuilder.filters = this.queryBuilder.filters.concat([this.queryModifier.filter(key, value)]);
    return this;
  }

  /**
   * @param  {string} value
   * @returns Model
   */
  public limit(value: string): Model {
    this.where('limit', value);
    return this;
  }

  /**
   * @param  {string} direction
   * @param  {Array<string>} ...column
   * @returns Model
   */
  private _orderBy(direction: string, ...column: Array<string>): Model {
    this.queryBuilder.sort = this.queryModifier.orderBy(column, direction);
    return this;
  }

}
