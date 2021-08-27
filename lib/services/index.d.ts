import {facebookServiceInterface} from './Facebook'
import {crowdtangleServiceInterface} from './Crowdtangle'
export interface servicesListInterface {
  facebook: facebookServiceInterface
  crowdtangle: crowdtangleServiceInterface
}
export declare const servicesList: servicesListInterface
