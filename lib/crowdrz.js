'use strict';
const async = require('async');

const servicesList = require('./services');

class Crowdrz {
  constructor (provider='', apiToken='') {
    this._resetQuery()
    this.provider = provider
    this.apiToken = apiToken
  }

  // Private method
  _resetQuery() {
    this.request = {
      method: 'GET',
      endpoint: null,
      params: {},
    };
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
    this.setMethod(method)
      .setEndpoint(endpoint)
      .setParams(params)
    const data = await servicesList[this.provider].getData({ apiToken: this.apiToken, ...this.request })
    this._resetQuery()
    return data
    
  }

  async get(endpoint, params) {
    this.setMethod('GET')
      .setEndpoint(endpoint)
      .setParams(params)
    const data = await servicesList[this.provider].getData({ apiToken: this.apiToken, ...this.request })
    this._resetQuery()
    return data
  }

  async post(endpoint, params) {
    this.setMethod('POST')
      .setEndpoint(endpoint)
      .setParams(params)
    const data = await servicesList[this.provider].getData({ apiToken: this.apiToken, ...this.request })
    this._resetQuery()
    return data
  }

  async put(endpoint, params) {
    this.setMethod('PUT')
      .setEndpoint(endpoint)
      .setParams(params)
    const data = await servicesList[this.provider].getData({ apiToken: this.apiToken, ...this.request })
    this._resetQuery()
    return data
  }

  async delete(endpoint, params) {
    this.setMethod('DELETE')
      .setEndpoint(endpoint)
      .setParams(params)
    const data = await servicesList[this.provider].getData({ apiToken: this.apiToken, ...this.request })
    this._resetQuery()
    return data
  }
}

module.exports = Crowdrz