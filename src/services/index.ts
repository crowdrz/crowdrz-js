import {getData as facebookGetData, facebookServiceInterface} from './Facebook'
import {getData as crowdtangleGetData, crowdtangleServiceInterface} from './Crowdtangle'

export interface servicesListInterface {
  facebook: facebookServiceInterface
  crowdtangle: crowdtangleServiceInterface
}

export const servicesList: servicesListInterface = {
  facebook: {
    getData: facebookGetData
  },
  crowdtangle: {
    getData: crowdtangleGetData
  }
}
