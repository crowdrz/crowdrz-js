'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g
    return (
      (g = {next: verb(0), throw: verb(1), return: verb(2)}),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function() {
          return this
        }),
      g
    )
    function verb(n) {
      return function(v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.')
      while (_)
        try {
          if (
            ((f = 1), y && (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return {value: op[1], done: false}
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return {value: op[0] ? op[1] : void 0, done: true}
    }
  }
Object.defineProperty(exports, '__esModule', {value: true})
exports.getData = void 0
var fb_1 = require('fb')
//const FB = require('fb').default
var _checkParams = function(request) {
  if (!(request.apiToken && request.method && request.endpoint && request.apiVersion)) {
    return false
  }
  return true
}
var getData = function(request, _accumulator, totalLimit) {
  if (_accumulator === void 0) {
    _accumulator = []
  }
  if (totalLimit === void 0) {
    totalLimit = null
  }
  return __awaiter(void 0, void 0, void 0, function() {
    var apiRes
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          // Check param validity
          if (!_checkParams(request)) {
            throw new Error('Api Token, Method and endpoint are required')
          }
          // Set api token to facebook SDK
          fb_1.default.setAccessToken(request.apiToken)
          fb_1.default.options({version: 'v' + request.apiVersion})
          // If params.limit is set, prepare recursive data
          if (!totalLimit && request.params.limit) {
            totalLimit = request.params.limit
            request.params.limit = 100
          }
          apiRes = null
          return [
            4 /*yield*/,
            fb_1.default.api(request.endpoint, request.method, request.params)
            // Recursive block
          ]
        case 1:
          // Call facebook SDK
          apiRes = _a.sent()
          // Recursive block
          if (totalLimit && apiRes.paging && apiRes.paging.cursors) {
            // Store after token
            request.params.after = apiRes.paging ? apiRes.paging.cursors.after : false
            // concat new results with last results
            _accumulator = _accumulator.concat(apiRes.data)
            if (totalLimit > 0 && _accumulator.length >= totalLimit) {
              return [
                2 /*return*/,
                _accumulator.splice(0, totalLimit)
                // If no limit, send all data after last page.
              ]
              // If no limit, send all data after last page.
            } else if (totalLimit === -1 && !request.params.after) {
              return [2 /*return*/, _accumulator]
            }
            // Reccursice call with new params.
            return [2 /*return*/, getData(request, _accumulator, totalLimit)]
          } else {
            if (apiRes.data) {
              _accumulator = _accumulator.concat(apiRes.data)
              return [2 /*return*/, _accumulator]
            }
            return [2 /*return*/, apiRes]
          }
          return [2 /*return*/]
      }
    })
  })
}
exports.getData = getData
// module.exports = {
//   getData
// }
//# sourceMappingURL=index.js.map
