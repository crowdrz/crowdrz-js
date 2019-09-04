declare const availableScope: string[];
declare const processList: any;
declare class Crowdrz {
    scope: string;
    key: string;
    verbose: boolean;
    constructor(scope: string, key: string);
    applyProcess(name: string, ressource: any, params: any): void;
}
