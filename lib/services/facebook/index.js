'use strict';

const FB = require('fb').default;

const setToken = apiToken => {
  FB.setAccessToken(apiToken);
}

const getData = (apiRoute, params) => {
  FB.api(apiRoute, params, (res) => {
    if(!res || res.error) {
      throw new Error(!res ? 'error occurred' : res.error);
    }
    return res;
  });
}

const getDataRow = async (apiRoute, params, dataLimit=25, _res=[]) => {
  // Delete limit params to avoid bug.
  if (params.limit) {
    delete params.limit
  }
  // Call facebook api.
  const res = await FB.api(apiRoute, params);
  if(!res || res.error) {
    throw new Error(!res ? 'error occurred' : res.error);
  }
  // If paginator, add after cursors to after params.
  params.after = res.paging ? res.paging.cursors.after : false;
  // Concat _res with new page data.
  _res = _res.concat(res.data);
  // If data limit is reached, splice last data to get user's limit length.
  if (dataLimit > 0 && _res.length >= dataLimit) {
    return _res.splice(0, dataLimit);
  // If no limit, send all data after last page.
  } else if (dataLimit === -1 && !params.after) {
    return _res;
  } 
  // Reccursice call with new params.
  return getDataRow(apiRoute, params, dataLimit, _res);
}

module.exports = {
  setToken,
  getData,
  getDataRow
}