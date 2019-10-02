'use strict'

const facebookService = require('./facebook')
const facebookMarketingFacebook = require('./facebook-marketing')

module.exports = {
  facebook: {
    getData: facebookService.getData
  },
  facebookMarketing: {
    getData: facebookMarketingFacebook.getData
  }
}
