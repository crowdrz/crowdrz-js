'use strict'

const facebookService = require('./facebook')

module.exports = {
  facebook: {
    getData: facebookService.getData
  }
}
