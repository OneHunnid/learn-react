import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

// We are taking the action and returning the new state for UPDATE_STATUS
const Status = (state={}, action) => {
  switch (action.type) {
    case 'UPDATE_STATUS':
      return {
        ... state,
        id: action.id,
        name: action.name,
        status: action.status,
        timestamp: action.timestamp
      }
    default:
      return state
  }
}

// We are updating "status" variable with an array state that contains
// all statuses and actions
const Statuses = (state = {}, action) => {
  switch(action.type) {
    case 'UPDATE_STATUS':
      return [
        ...state,
        Status(undefined, action)
      ]
    default:
      return state
  }
}

const combinedReducers = combineReducers({
    Statuses,
    routing: routerReducer
  })

export default combinedReducers;
