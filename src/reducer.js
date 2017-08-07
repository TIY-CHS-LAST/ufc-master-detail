import { ADD_FIGHTER, GET_FIGHTERS, GET_CURRENT_FIGHTER } from './constants'
import { combineReducers } from 'redux'
import fighters from './fighters'
const defaultState = { fighters, currentFighter: {} }

function fighterReducer (state = defaultState, action) {
  switch (action.type) {
    case ADD_FIGHTER:
      return Object.assign({}, state, {
        fighters: [ ...state.fighters, action.payload ]
      })
    case GET_FIGHTERS:
      console.log('get fighters is getting to the reducer', action)
      return Object.assign({}, state, { fighters: action.payload })
    case GET_CURRENT_FIGHTER:
      console.log('in da reducer', action)
      return Object.assign({}, state, { currentFighter: action.payload })
    default:
      return state
  }
}

function genericReducer (state, action) {
  switch (action.type) {
    case 'HELLO_WORLD':
      return Object.assign({}, state, { foo: 'Hello World' })
    default:
      return state
  }
}

export default combineReducers({ fighterReducer })
