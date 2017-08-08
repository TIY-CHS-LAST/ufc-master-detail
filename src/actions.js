import { ADD_FIGHTER, GET_FIGHTERS, GET_CURRENT_FIGHTER } from './constants'
import { getAllFighters, getFighter } from './services/fighters'
// import fighters from './fighters'
export function addFighter (newFighter) {
  return { type: ADD_FIGHTER, payload: newFighter }
}

// export function getFighter (id) {
//   console.log('id', id)
//   const selectedFighter = fighters.find(fighter => fighter.id === Number(id))
//   return { type: GET_CURRENT_FIGHTER, payload: {} }
// }
// export function getFighters () {
//   return { type: GET_FIGHTERS, payload: fighters }
// }
export function getCurrentFighter (id) {
  return (dispatch, getState) => {
    dispatch({ type: 'FETCHING_FIGHTER' })
    return getFighter(id).then(function (fighter) {
      console.log(fighter)
      dispatch(getFighterAction(fighter))
    })
  }
}
function getFighterAction (payload) {
  return { type: GET_CURRENT_FIGHTER, payload }
}

export function getFighters () {
  return (dispatch, getState) => {
    return getAllFighters().then(function (res) {
      console.log('response from ufc server', res)
      dispatch({ type: GET_FIGHTERS, payload: res })
    })
  }
}
