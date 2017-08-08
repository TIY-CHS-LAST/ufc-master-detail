import { ADD_FIGHTER, GET_FIGHTERS, GET_CURRENT_FIGHTER } from './constants'
import { combineReducers } from 'redux'
const defaultState = { isFetching: false, fighters: [], currentFighter: {} }

function fighterReducer (state = defaultState, action) {
  switch (action.type) {
    case ADD_FIGHTER:
      return Object.assign({}, state, {
        fighters: [ ...state.fighters, action.payload ]
      })
    case GET_FIGHTERS:
      return Object.assign({}, state, {
        isFetching: false,
        fighters: action.payload
      })
    case GET_CURRENT_FIGHTER:
      console.log('in da reducer', action)
      return Object.assign({}, state, {
        isFetching: false,
        currentFighter: action.payload
      })
    case 'FETCHING_FIGHTER':
      return Object.assign({}, state, { isFetching: true })
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
