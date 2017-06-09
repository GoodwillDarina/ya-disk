import 'es6-promise/auto';
import fetch from 'isomorphic-fetch';

import * as Action from '../constants/actions';
import { Config } from '../config';

let apiUrl = Config.url;
let requestHeaders = Config.headers;

export const initApp = () => {
  return dispatch => {
    return fetch(`${apiUrl}/resources?path=/`, {headers: requestHeaders, })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then((response) => {
        console.log(response._embedded.items);

        dispatch({type: Action.INIT_APP, folders: response._embedded.items});
      })
  }
}
