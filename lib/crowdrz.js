'use strict'
const async = require('async')

const servicesList = require('./services')

class Crowdrz {
  constructor(provider = '', apiToken = '') {
    this._resetQuery()
    this.provider = provider
    this.apiToken = apiToken
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
    let data = null
    this.setMethod(method)
      .setEndpoint(endpoint)
      .setParams(params)
    try {
      data = await servicesList[this.provider].getData({apiToken: this.apiToken, ...this.request})
    } catch (e) {
      throw new Error(e)
    }
    this._resetQuery()
    return data
  }

  async get(endpoint, params) {
    console.log('tt')
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
