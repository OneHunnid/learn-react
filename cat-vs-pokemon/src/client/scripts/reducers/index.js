import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const app = (state = {}, action) => {
  switch (action.type) {
    case 'CLEAR_CONTENDERS':
      return {} // empty state
    case 'FETCH_CAT':
      return {
        ...state,
        cat: action.cat
      }
    case 'FETCH_POKEMON':
      return {
        ...state,
        pokemon: action.pokemon
      }
    default:
      return state
  }
}

const combinedReducers = combineReducers({
  app,
  routing: routerReducer
})

export default combinedReducers;
