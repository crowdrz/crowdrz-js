'use strict';

const availableScope = ['facebook'];

const processList: any = {
  'facebook': {
    'getComments': require('./process/facebook/getComments')
  }
} 

class Crowdrz {
  public scope: string = '';
  public key: string = '';
  public verbose: boolean = false;

  constructor(scope: string, key: string) {
    if (availableScope.indexOf(scope) === -1) {
      console.log('Crowdrz JS - This scope is already not supported.');
      return;
    }
    this.scope = scope;
    this.verbose = this.verbose;
    this.key = key;
    console.log(scope, key);
  }

  public applyProcess(name: string, ressource: any, params: any) {
    processList[this.scope][name](ressource, this.key, params, (err: any, res: any) => {
      if(err) {
        throw new Error(err);
      }
      console.log('res', res);
    });
  }
}

module.exports = Crowdrz;
