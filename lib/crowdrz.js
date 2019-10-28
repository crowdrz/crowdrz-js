'use strict'
const servicesList = require('./services')

class Crowdrz {
  constructor(provider = '', apiToken = '') {
    this._resetQuery()
    this.provider = provider
    this.apiToken = apiToken
    this.debug = false
  }

  // Private method
  _resetQuery() {
    this.request = {
      method: 'GET',
      endpoint: null,
      params: {}
    }
  }

  _resetQueryElem(elem) {
    this[elem] = null
  }

  // Setter
  setProvider(provider) {
    this.provider = provider
    return this
  }

  setDebug(debug) {
    this.debug = debug
    return this
  }

  setToken(token) {
    if (token) {
      this.apiToken = token
    }
    return this
  }

  setMethod(method) {
    if (method) {
      this.request.method = method
    }
    return this
  }

  setEndpoint(endpoint) {
    if (endpoint) {
      this.request.endpoint = endpoint
    }
    return this
  }

  setParams(params) {
    if (params) {
      this.request.params = params
    }
    return this
  }

  // Core
  async call(method, endpoint, params) {
    params = JSON.parse(JSON.stringify(params)) // Clone given object to avoid reference being updated during crowdrz call

    let data = null
    this.setMethod(method)
      .setEndpoint(endpoint)
      .setParams(params)
    if (this.debug) {
      console.log(method, endpoint, params, '\n')
    }
    try {
      data = await servicesList[this.provider].getData({apiToken: this.apiToken, ...this.request})
    } catch (error) {
      throw new Error(error)
    }
    this._resetQuery()
    return data
  }

  async get(endpoint, params) {
    return await this.call('GET', endpoint, params)
  }

  async post(endpoint, params) {
    return await this.call('POST', endpoint, params)
  }

  async put(endpoint, params) {
    return await this.call('PUT', endpoint, params)
  }

  async delete(endpoint, params) {
    return await this.call('DELETE', endpoint, params)
  }
}

module.exports = Crowdrz
