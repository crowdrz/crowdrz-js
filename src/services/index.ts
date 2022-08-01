import {getData as facebookGetData, facebookServiceInterface} from './facebook'
import {getData as crowdtangleGetData, crowdtangleServiceInterface} from './crowdtangle'

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
