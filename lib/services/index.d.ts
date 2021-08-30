import {facebookServiceInterface} from './facebook/index'
import {crowdtangleServiceInterface} from './crowdtangle/index'
export interface servicesListInterface {
  facebook: facebookServiceInterface
  crowdtangle: crowdtangleServiceInterface
}
export declare const servicesList: servicesListInterface
