import * as Action from '../constants/actions'
//import { Config } from '../config'
//
//let apiUrl = Config.url
//let requestHeaders = Config.headers

export const initApp = () => {
  return {
    type: Action.INIT_APP
  }
}
