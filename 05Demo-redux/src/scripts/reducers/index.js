import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

// state={} sets default state
const retrieveMessage = (state={}, action) => {
  // switch statements allows us to return data per the case type.
  switch (action.type) {
    case 'FETCH_MESSAGE':
      return {
        // Spread operator allows us to add to the state
        ...state,
        message: "This is an example of how to utilize React and Redux together to create a single page application."
      }
      case 'UPDATE_MESSAGE':
      return {
        ...state,
        message: action.message
      }
      // If nothing matches the action.type, then return default state
    default:
      return state
  }
}

// Combining our reducers although we only have 1
// This is where you will add more reducers
const combinedReducers = combineReducers({
    retrieveMessage,
    routing: routerReducer
  })

// Export combinedReducers to be used in store.js
export default combinedReducers;
