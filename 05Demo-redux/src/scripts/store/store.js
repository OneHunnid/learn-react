import { createStore, applyMiddleware } from 'redux'
import combinedReducers from './../reducers/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// Applying our middleware to display helpful info in the console
const middleware = applyMiddleware(logger(), thunk);

// Creating our store by including the combined reducers and middleware
const store = createStore(
  combinedReducers,
  middleware
);

// Exporting our store
export default store;
