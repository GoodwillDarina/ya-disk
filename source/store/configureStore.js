import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(initialState) {
  let store;
  if (__DEBUG__) {
    const logger = createLogger();
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunkMiddleware, logger));
  } else {
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunkMiddleware));
  }

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
