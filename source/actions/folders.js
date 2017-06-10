import 'es6-promise/auto';
import fetch from 'isomorphic-fetch';

import * as Action from '../constants/actions';
import { Config } from '../config';

let apiUrl = Config.url;
let requestHeaders = Config.headers;

export const getData = (path) => {
  return (dispatch) => {
    // dispatch({type: Action.GET_DATA});
    return fetch(`${apiUrl}/resources?path=${path}`, {headers: requestHeaders, })
      .then((response) => {
        if (response.status >= 400) {
          dispatch({type: Action.GET_DATA_FAIL, message: 'Bad response from server'});
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then((response) => {
        dispatch({type: Action.GET_DATA_SUCCESS, folders: response._embedded.items});
      })
  }
}
