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
    case 'DELETE_STATUS':
      return {
        ... state,
        id: action.id
      }
    default:
      return state
  }
}

// We are updating "status" variable with an array state that contains
// all statuses and actions
const Statuses = (state = {}, action) => {

  // take action.id and search through array. If an item has a matching id, then
  // delete that item

  switch(action.type) {
    case 'UPDATE_STATUS':
      return [
        ...state,
        Status(undefined, action)
      ]
    case 'DELETE_STATUS':

      // We use a predicate (function that evaluates to true or false)
      // to find the index of state and test if the status id
      // is the same as the item in array.

      const index = state.findIndex( ({id}) => id == action.id )

      // ES5 EXAMPLE
      // const foo = state.findIndex( function({id}}, index, state) {
      //   return element.id == action.id;
      // })


      // If index is true, then remove the status from array
      if (index > -1) {
        state.splice(index, 1)
      }

      // return new array
      return [
        ...state
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
