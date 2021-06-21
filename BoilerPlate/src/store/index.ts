import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { combinedReducers } from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

/**
 * this app uses React Native Debugger, but it works without it
 */

const composeEnhancers = compose;
const middlewares = [sagaMiddleware];

const store = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(rootSaga);

export { store };