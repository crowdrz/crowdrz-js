const Crowdrz = require('../lib/crowdrz');

const apiKey = '<api key>';

const getMeDemo = async () => {
  const facebook = new Crowdrz('facebook')
  facebook.setToken(apiKey)
  const me = await facebook.call('GET', '/me')
  const me2 = await facebook.setMethod('GET').setEndpoint('/me').call()
  const me3 = await facebook.setEndpoint('/me').get()
  console.log(me, me2, me3)
}

getMeDemo()