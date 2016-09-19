import { createStore, applyMiddleware } from 'redux'
import combinedReducers from '../reducers/index'
import logger from 'redux-logger'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(logger(), thunk, promise);

const store = createStore(
  combinedReducers,
  middleware
);

export default store;
