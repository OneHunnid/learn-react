import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const initialState = {
  fetching: false,
  fetched: false,
  payload: [],
  error: null,
}

const retrieveMessage = (state=initialState, action) => {
  switch (action.type) {
    case 'FETCH_MESSAGE':
      return {
        ...state,
        message: "A React, Redux, SASS and Webpack Starter Kit"
      }
    default:
      return state
  }
}

const combinedReducers = combineReducers({
    retrieveMessage,
    routing: routerReducer
  })

export default combinedReducers;
