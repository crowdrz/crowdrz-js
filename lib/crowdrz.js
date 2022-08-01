'use strict'
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
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
exports.Crowdrz = void 0
var services_1 = require('./services')
var Crowdrz = /** @class */ (function() {
  function Crowdrz(provider, apiToken, apiVersion) {
    if (apiVersion === void 0) {
      apiVersion = '5.0'
    }
    this.provider = provider
    this.apiToken = apiToken
    this.apiVersion = apiVersion
    this._resetQuery()
    this.provider = provider
    this.apiToken = apiToken
    this.apiVersion = apiVersion
    this.debug = false
    this.request = {}
  }
  // Private method
  Crowdrz.prototype._resetQuery = function() {
    this.request = {
      method: 'GET',
      endpoint: '',
      params: {}
    }
  }
  // Setter
  Crowdrz.prototype.setProvider = function(provider) {
    this.provider = provider
    return this
  }
  Crowdrz.prototype.setDebug = function(debug) {
    this.debug = debug
    return this
  }
  Crowdrz.prototype.setApiVersion = function(version) {
    this.apiVersion = version
    return this
  }
  Crowdrz.prototype.setToken = function(token) {
    if (token) {
      this.apiToken = token
    }
    return this
  }
  Crowdrz.prototype.setMethod = function(method) {
    if (method) {
      this.request.method = method
    }
    return this
  }
  Crowdrz.prototype.setEndpoint = function(endpoint) {
    if (endpoint) {
      this.request.endpoint = endpoint
    }
    return this
  }
  Crowdrz.prototype.setParams = function(params) {
    if (params) {
      this.request.params = params
    }
    return this
  }
  // Core
  Crowdrz.prototype.call = function(method, endpoint, params) {
    if (params === void 0) {
      params = {}
    }
    return __awaiter(this, void 0, void 0, function() {
      var data, error_1
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            params = JSON.parse(JSON.stringify(params)) // Clone given object to avoid reference being updated during crowdrz call
            data = null
            this.setMethod(method)
              .setEndpoint(endpoint)
              .setParams(params)
            if (this.debug) {
              console.log(method, endpoint, params, '\n')
            }
            _a.label = 1
          case 1:
            _a.trys.push([1, 3, 4, 5])
            return [4 /*yield*/, services_1.servicesList[this.provider].getData(__assign({apiVersion: this.apiVersion, apiToken: this.apiToken}, this.request))]
          case 2:
            data = _a.sent()
            return [3 /*break*/, 5]
          case 3:
            error_1 = _a.sent()
            if (this.debug) {
              console.log(error_1.message, '\n')
            }
            throw error_1
          case 4:
            this._resetQuery()
            return [7 /*endfinally*/]
          case 5:
            return [2 /*return*/, data]
        }
      })
    })
  }
  Crowdrz.prototype.get = function(endpoint, params) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.call('GET', endpoint, params)]
          case 1:
            return [2 /*return*/, _a.sent()]
        }
      })
    })
  }
  Crowdrz.prototype.post = function(endpoint, params) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.call('POST', endpoint, params)]
          case 1:
            return [2 /*return*/, _a.sent()]
        }
      })
    })
  }
  Crowdrz.prototype.put = function(endpoint, params) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.call('PUT', endpoint, params)]
          case 1:
            return [2 /*return*/, _a.sent()]
        }
      })
    })
  }
  Crowdrz.prototype.delete = function(endpoint, params) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, this.call('DELETE', endpoint, params)]
          case 1:
            return [2 /*return*/, _a.sent()]
        }
      })
    })
  }
  return Crowdrz
})()
exports.Crowdrz = Crowdrz
