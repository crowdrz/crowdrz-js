export interface crowdtangleServiceInterface {
  _checkParams?(): boolean
  getData(requestParams: any): Promise<any>
}
export declare const getData: (requestParams: any, _accumulator?: Array<any>, totalLimit?: number) => Promise<any>
