import 'es6-promise/auto';
import fetch from 'isomorphic-fetch';

import * as Action from '../constants/actions';
import { Config } from '../config';

let requestHeaders = Config.headers;

export const authToken = (token) => {
  return (dispatch) => {
    localStorage.setItem('token', token);

    dispatch({type: Action.AUTH, bool: true})
  }
}

export const closeAlert = (token) => {
  return {
    type: Action.CLOSE_ALERT, 
    message: false
  }
}

export const getData = (path) => {
  return (dispatch) => {

    requestHeaders['Authorization'] = 'OAuth ' + localStorage.getItem('token');

    dispatch({type: Action.GET_DATA});
    return fetch(`${Config.disk.url}/resources?path=${path}`, {headers: requestHeaders})
      .then((response) => {
        if (response.status >= 400) {
          let error =  `Error ${response.status}: ${response.statusText.toLowerCase()}`
          if (response.status == 404) {
            dispatch({type: Action.GET_DATA_FAIL, message: `${error} ${path}`});
          } else if (response.status == 401) {
            localStorage.removeItem('token');
            dispatch({type: Action.AUTH, bool: false});
          }
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then((response) => {
        dispatch({type: Action.GET_DATA_SUCCESS, folders: response._embedded.items});
      })
  }
}
