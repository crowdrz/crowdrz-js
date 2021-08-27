'use strict'
Object.defineProperty(exports, '__esModule', {value: true})
exports.servicesList = void 0
var Facebook_1 = require('./Facebook')
var Crowdtangle_1 = require('./Crowdtangle')
exports.servicesList = {
  facebook: {
    getData: Facebook_1.getData
  },
  crowdtangle: {
    getData: Crowdtangle_1.getData
  }
}
