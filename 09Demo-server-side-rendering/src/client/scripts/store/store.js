import { createStore, applyMiddleware } from 'redux'
import combinedReducers from './../reducers/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export default createStore(
  combinedReducers,
  applyMiddleware(logger(), thunk)
);
