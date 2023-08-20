import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from '../reducer';
import rootSaga from '../saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();
const saga = createSagaMiddleware();

// Provide an initial state as the second argument to createStore if needed
const initialState = {}; // Replace with your initial state if necessary

const store = createStore(
  rootReducer,
  initialState, // Provide your initial state here
  composeWithDevTools(applyMiddleware(saga, logger))
);

saga.run(rootSaga);

export default store;