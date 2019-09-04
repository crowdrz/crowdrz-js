'use strict';
const availableScope = ['facebook'];
const processList = {
    'facebook': {
        'getComments': require('./process/facebook/getComments')
    }
};
class Crowdrz {
    constructor(scope, key) {
        this.scope = '';
        this.key = '';
        this.verbose = false;
        if (availableScope.indexOf(scope) === -1) {
            console.log('Crowdrz JS - This scope is already not supported.');
            return;
        }
        this.scope = scope;
        this.verbose = this.verbose;
        this.key = key;
        console.log(scope, key);
    }
    applyProcess(name, ressource, params) {
        processList[this.scope][name](ressource, this.key, params, (err, res) => {
            if (err) {
                throw new Error(err);
            }
            console.log('res', res);
        });
    }
}
module.exports = Crowdrz;
