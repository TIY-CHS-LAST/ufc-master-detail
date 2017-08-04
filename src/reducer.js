import { ADD_FIGHTER, GET_FIGHTERS } from './constants'
import { combineReducers } from 'redux';
import fighters from './fighters'
const defaultState = {
  fighters,
  currentFighter: {}
}

function fighterReducer (state = defaultState, action) {
  switch(action.type) {
    case ADD_FIGHTER:
      return Object.assign({}, state, {
        fighters: [...state.fighters, action.payload]
      })
    case GET_FIGHTERS:
    console.log('get fighters is getting to the reducer', action);
      return Object.assign({}, state, {
        fighters: action.payload
      })
    default:
      return state;
  }
}

export default combineReducers({fighterReducer})
