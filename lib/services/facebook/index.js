'use strict'

const FB = require('fb').default

const _checkParams = (request) => {
  if (!(request.apiToken && request.method && request.endpoint && request.apiVersion)) {
    return false
  }
  return true
}

const getData = async (request, _accumulator = [], totalLimit = null) => {
  // Check param validity
  if (!_checkParams(request)) {
    throw new Error('Api Token, Method and endpoint are required')
  }
  // Set api token to facebook SDK
  FB.setAccessToken(request.apiToken)
  FB.options({version: `v${request.apiVersion}`})

  // If params.limit is set, prepare recursive data
  if (!totalLimit && request.params.limit) {
    totalLimit = request.params.limit
    request.params.limit = 100
  }

  let apiRes = null
  // Call facebook SDK
  apiRes = await FB.api(request.endpoint, request.method, request.params)

  // Recursive block
  if (totalLimit && apiRes.paging && apiRes.paging.cursors) {
    // Store after token
    request.params.after = apiRes.paging ? apiRes.paging.cursors.after : false
    // concat new results with last results
    _accumulator = _accumulator.concat(apiRes.data)
    if (totalLimit > 0 && _accumulator.length >= totalLimit) {
      return _accumulator.splice(0, totalLimit)
      // If no limit, send all data after last page.
    } else if (totalLimit === -1 && !request.params.after) {
      return _accumulator
    }
    // Reccursice call with new params.
    return getData(request, _accumulator, totalLimit)
  } else {
    if (apiRes.data) {
      _accumulator = _accumulator.concat(apiRes.data)
      return _accumulator
    }
    return apiRes
  }
}

module.exports = {
  getData
}
