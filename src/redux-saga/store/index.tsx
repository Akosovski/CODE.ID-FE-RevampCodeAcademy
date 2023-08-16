import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import createSagaMiddleware from '@redux-saga/core'
import rootReducer from '../reducer'
import rootSaga from '../saga'
import { composeWithDevTools } from 'redux-devtools-extension'

const logger = createLogger()
const saga = createSagaMiddleware()
const store = createStore(
    rootReducer,
    undefined,
    composeWithDevTools(applyMiddleware(saga,logger))
)

saga.run(rootSaga)

export default store