'use strict'
Object.defineProperty(exports, '__esModule', {value: true})
exports.servicesList = void 0
var index_1 = require('./facebook/index')
var index_2 = require('./crowdtangle/index')
exports.servicesList = {
  facebook: {
    getData: index_1.getData
  },
  crowdtangle: {
    getData: index_2.getData
  }
}
