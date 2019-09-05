'use strict';

const FB = require('fb').default;
const fbProcess = require('./facebookProcessList');

let datas = [];

const facebookAction = async function(route, method, params, next='') {
  console.log('page');
  let res = await FB.api(route, method, {after: next, ...params});
  if(!res || res.error) {
    throw new Error(!res ? 'error occurred' : res.error);
  }
  if (res.paging.next) {
    console.log('page next');
    datas = [...datas, ...res.data];
    return await facebookAction(route, method, params, res.paging.cursors.after);
  } else {
    console.log('snd', datas);
    return datas;
  }
}

module.exports = async function(route, method, params, token) {
  FB.setAccessToken(token);
  let res = await facebookAction(route, method, params);
  console.log('res2', res);
  return res;
};