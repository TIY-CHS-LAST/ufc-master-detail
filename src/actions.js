import { ADD_FIGHTER, GET_FIGHTERS } from './constants'
import fighters from './fighters'

export function addFighter (newFighter) {
  return {
    type: ADD_FIGHTER,
    payload: newFighter
  }
}

export function getFighters () {
  return {
    type: GET_FIGHTERS,
    payload: fighters
  }
}
