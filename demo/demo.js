const Crowdrz = require('../lib/crowdrz');

const apiKey = 'EAAGnFkxIcgQBAMehzed3niJfZAJINBhT86ryKqqkhQ7qAI4asVTTZCKIJwDFfQ9v4nRdlpF7uullM6zCmAt09hnRtlalzs7ENZAWAdyY3QKN8uFKCPHZBPUc4ghQdiM4i47w83FiZCYUeUrQzcKfCPtJcepzaZCa24FqUjZBveOlyl7J5SIoUBS5RoBn6hFaSd2gYTEw1uo0QZDZD';

const getMeDemo = async () => {
  const facebook = new Crowdrz('facebook')
  facebook.setToken(apiKey)
  const me = await facebook.call('GET', '/me')
  const me2 = await facebook.setMethod('GET').setEndpoint('/me').call()
  const me3 = await facebook.setEndpoint('/me').get()
}

getMeDemo()