import { ADD_FIGHTER, GET_FIGHTERS, GET_CURRENT_FIGHTER } from './constants'
import fighters from './fighters'

export function addFighter (newFighter) {
  return { type: ADD_FIGHTER, payload: newFighter }
}

export function getFighter (id) {
  console.log('id', id)
  const selectedFighter = fighters.find(fighter => fighter.id === Number(id))
  return { type: GET_CURRENT_FIGHTER, payload: selectedFighter }
}

export function getFighters () {
  return { type: GET_FIGHTERS, payload: fighters }
}
