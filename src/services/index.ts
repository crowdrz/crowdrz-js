import {getData, facebookServiceInterface} from './facebook'

export interface servicesListInterface {
  facebook: facebookServiceInterface
}

export const servicesList: servicesListInterface = {
  facebook: {
    getData
  }
}
