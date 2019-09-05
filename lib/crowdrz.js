'use strict';

const moduleList = require('./module/index');

class Crowdrz {
  constructor () {
    // Create Proxy to handle scope function and test if scope is initialized - CF addScope() method.
    return new Proxy(this, {
      get: (target, prop) => {
        // If 'prop' (scope) is not an initialized && this scope is not a crowdrz module (./module/index.js) throw error.
        if (!this[prop] && prop in moduleList) {
          throw new Error('Crowdrz JS - Scope not found. You need to add scope with addScope method.')
        }
        // Otherwise just call scope method
        return target[prop];
      }
  });
  }

  /* 
    When we initialized crowdrz with new Crowdrz(), we need to add scope to crowdrz node.
    The scope is the social network where you want get Data.
  */ 
  addScope(scope, apiToken) {
    if (!scope in moduleList) {
      throw new Error('Crowdrz JS - This scope is already not supported.');
    } else if (!apiToken) {
      throw new Error(`Crowdrz JS - ${scope} token are required`);
    }
    // Active scope method from moduleList in crowdrz class. (crowdrz.facebook|instagram.<method>)
    this[scope] = moduleList[scope];
    // And store API token.
    this[scope].token = apiToken;
  }
}

module.exports = Crowdrz;