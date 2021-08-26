import {servicesList, servicesListInterface} from './services'

export interface CrowdrzRequest {
  method: string
  endpoint: string
  params: object
}

interface CrowdrzInterface {
  provider: keyof servicesListInterface
  apiToken: string
  apiVersion: string
  debug: boolean
  request: CrowdrzRequest

  _resetQuery(): void

  setProvider(provider: string): Crowdrz
  setDebug(debug: boolean): Crowdrz
  setApiVersion(version: string): Crowdrz
  setToken(token: string): Crowdrz
  setMethod(method: string): Crowdrz
  setEndpoint(endpoint: string): Crowdrz
  setParams(params: object): Crowdrz

  call(method: string, endpoint: string, params: object): Promise<any>

  get(endpoint: string, params: object): Promise<any>
  post(endpoint: string, params: object): Promise<any>
  put(endpoint: string, params: object): Promise<any>
  delete(endpoint: string, params: object): Promise<any>
}

export class Crowdrz implements CrowdrzInterface {
  public debug: boolean
  public request: CrowdrzRequest

  constructor(public provider: keyof servicesListInterface, public apiToken: string, public apiVersion: string = '5.0') {
    this._resetQuery()
    this.provider = provider
    this.apiToken = apiToken
    this.apiVersion = apiVersion
    this.debug = false
    this.request = <CrowdrzRequest>{}
  }

  // Private method
  _resetQuery() {
    this.request = {
      method: 'GET',
      endpoint: '',
      params: {}
    }
  }

  // Setter
  setProvider(provider: keyof servicesListInterface): Crowdrz {
    this.provider = provider
    return this
  }

  setDebug(debug: boolean): Crowdrz {
    this.debug = debug
    return this
  }

  setApiVersion(version: string): Crowdrz {
    this.apiVersion = version
    return this
  }

  setToken(token: string): Crowdrz {
    if (token) {
      this.apiToken = token
    }
    return this
  }

  setMethod(method: string): Crowdrz {
    if (method) {
      this.request.method = method
    }
    return this
  }

  setEndpoint(endpoint: string): Crowdrz {
    if (endpoint) {
      this.request.endpoint = endpoint
    }
    return this
  }

  setParams(params: object): Crowdrz {
    if (params) {
      this.request.params = params
    }
    return this
  }

  // Core
  async call(method: string, endpoint: string, params: object): Promise<any> {
    params = JSON.parse(JSON.stringify(params)) // Clone given object to avoid reference being updated during crowdrz call

    let data: any = null
    this.setMethod(method)
      .setEndpoint(endpoint)
      .setParams(params)
    if (this.debug) {
      console.log(method, endpoint, params, '\n')
    }
    try {
      data = await servicesList[this.provider].getData({apiVersion: this.apiVersion, apiToken: this.apiToken, ...this.request})
    } catch (error) {
      if (this.debug) {
        console.log(error.message, '\n')
      }
      throw error
    } finally {
      this._resetQuery()
    }

    return data
  }

  async get(endpoint: string, params: object): Promise<any> {
    return await this.call('GET', endpoint, params)
  }

  async post(endpoint: string, params: object): Promise<any> {
    return await this.call('POST', endpoint, params)
  }

  async put(endpoint: string, params: object): Promise<any> {
    return await this.call('PUT', endpoint, params)
  }

  async delete(endpoint: string, params: object): Promise<any> {
    return await this.call('DELETE', endpoint, params)
  }
}
