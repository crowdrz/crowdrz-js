'use strict';

const facebookService = require('../../services/facebook');

module.exports = async (postId, commentsLimit, token) => {
  facebookService.setToken(token);
  return await facebookService.getDataRow(`/${postId}/comments`, {}, commentsLimit);
}



