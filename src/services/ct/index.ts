const request = require('request')

const API_BASE_URL = 'https://api.crowdtangle.com'

export interface crowdtangleServiceInterface {
  _checkParams?(): boolean
  getData(requestParams: any): Promise<any>
}

const _checkParams = (requestParams: any): boolean => {
  if (!(requestParams.apiToken && requestParams.method && requestParams.endpoint)) {
    return false
  }
  return true
}

const callApi = async (options: any) => {
  return new Promise((resolve, reject) => {
    request(options, (req: any, res: any) => {
      const body = JSON.parse(res.body)
      if (body.status === 200) {
        resolve(body.result)
      } else {
        reject(body.message)
      }
    })
  })
}

export const getData = async (requestParams: any, _accumulator: Array<any> = [], totalLimit: number = -1): Promise<any> => {
  if (!_checkParams(requestParams)) {
    throw new Error('Api token, method and endpoint are required')
  }

  const requestOptions = {
    url: `${API_BASE_URL}${requestParams.endpoint}`,
    headers: {
      'x-api-token': requestParams.apiToken
    },
    qs: requestParams.params
  }

  // if (totalLimit === -1 && requestParams.params.count) {
  //   totalLimit = requestParams.params.count
  //   requestParams.params.count = 100
  // }

  let apiRes: any = null
  apiRes = await callApi(requestOptions)

  return apiRes[Object.keys(apiRes)[0]]

  // if (totalLimit && apiRes.pagination && apiRes.pagination.nextPage) {
  //   _accumulator = _accumulator.concat(apiRes[Object.keys(apiRes)[0]])
  //   if (totalLimit > 0 && _accumulator.length >= totalLimit) {
  //     return _accumulator.splice(0, totalLimit)
  //     // If no limit, send all data after last page.
  //   } else if (totalLimit === -1 && !apiRes.pagination.nextPage) {
  //     return _accumulator
  //   }
  //   return getData(requestParams, _accumulator, totalLimit)
  // } else {
  //   if (apiRes[Object.keys(apiRes)[0]]) {
  //     _accumulator = _accumulator.concat(apiRes[Object.keys(apiRes)[0]])
  //     return _accumulator
  //   }
  //   return apiRes
  // }
  // console.log(apiRes)
  //console.log(apiRes)
}
