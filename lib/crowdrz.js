'use strict';

const moduleList = require('./module/index');

class Crowdrz {
  constructor() {
    return new Proxy(this, {
      get: (target, prop) => {
        if (!this[prop] && prop in moduleList) {
          throw new Error('Scope not found. You need to add scope with addScope method.')
        }
        return target[prop];
      },
  });
  }

  addScope(scope, token) {
    if (!scope in moduleList) {
      throw new Error('Crowdrz JS - This scope is already not supported.');
    }
    this[scope] = moduleList[scope];
    this[scope].token = token;
  }
}

module.exports = Crowdrz;