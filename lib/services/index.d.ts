import {facebookServiceInterface} from './facebook'
import {crowdtangleServiceInterface} from './crowdtangle'
export interface servicesListInterface {
  facebook: facebookServiceInterface
  crowdtangle: crowdtangleServiceInterface
}
export declare const servicesList: servicesListInterface
