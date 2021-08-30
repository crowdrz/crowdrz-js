'use strict'
Object.defineProperty(exports, '__esModule', {value: true})
exports.servicesList = void 0
var facebook_1 = require('./facebook')
var crowdtangle_1 = require('./crowdtangle')
exports.servicesList = {
  facebook: {
    getData: facebook_1.getData
  },
  crowdtangle: {
    getData: crowdtangle_1.getData
  }
}
