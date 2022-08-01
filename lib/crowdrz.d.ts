import {servicesListInterface} from './services'
export interface CrowdrzRequest {
  method: string
  endpoint: string
  params: object
}
interface CrowdrzInterface {
  provider: keyof servicesListInterface
  apiToken: string
  apiVersion: string
  debug: boolean
  request: CrowdrzRequest
  _resetQuery(): void
  setProvider(provider: string): Crowdrz
  setDebug(debug: boolean): Crowdrz
  setApiVersion(version: string): Crowdrz
  setToken(token: string): Crowdrz
  setMethod(method: string): Crowdrz
  setEndpoint(endpoint: string): Crowdrz
  setParams(params: object): Crowdrz
  call(method: string, endpoint: string, params: object): Promise<any>
  get(endpoint: string, params: object): Promise<any>
  post(endpoint: string, params: object): Promise<any>
  put(endpoint: string, params: object): Promise<any>
  delete(endpoint: string, params: object): Promise<any>
}
export declare class Crowdrz implements CrowdrzInterface {
  provider: keyof servicesListInterface
  apiToken: string
  apiVersion: string
  debug: boolean
  request: CrowdrzRequest
  constructor(provider: keyof servicesListInterface, apiToken: string, apiVersion?: string)
  _resetQuery(): void
  setProvider(provider: keyof servicesListInterface): Crowdrz
  setDebug(debug: boolean): Crowdrz
  setApiVersion(version: string): Crowdrz
  setToken(token: string): Crowdrz
  setMethod(method: string): Crowdrz
  setEndpoint(endpoint: string): Crowdrz
  setParams(params: object): Crowdrz
  call(method: string, endpoint: string, params?: object): Promise<any>
  get(endpoint: string, params: object): Promise<any>
  post(endpoint: string, params: object): Promise<any>
  put(endpoint: string, params: object): Promise<any>
  delete(endpoint: string, params: object): Promise<any>
}
export {}
