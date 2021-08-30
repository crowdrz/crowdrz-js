import {getData as facebookGetData, facebookServiceInterface} from './facebook/index'
import {getData as crowdtangleGetData, crowdtangleServiceInterface} from './crowdtangle/index'

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
