export interface facebookServiceInterface {
  _checkParams?(): boolean
  getData(request: any, _accumulator?: Array<any>, totalLimit?: number): Promise<any>
}
export declare const getData: (request: any, _accumulator?: Array<any>, totalLimit?: number) => Promise<any>
