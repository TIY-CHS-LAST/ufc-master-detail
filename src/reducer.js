import { ADD_FIGHTER, GET_FIGHTERS } from './constants'
import { combineReducers } from 'redux';
const defaultState = {
  fighters: [{
  "id": 241895,
  "nickname": null,
  "wins": 17,
  "statid": 1194,
  "losses": 1,
  "last_name": "Cyborg",
  "weight_class": "Women_Featherweight",
  "title_holder": true,
  "draws": 0,
  "first_name": "Cris",
  "fighter_status": "Active",
  "rank": "C",
  "pound_for_pound_rank": "13",
  "thumbnail": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FCris-Cyborg%252FCris-Cyborg_241895_medium_thumbnail.jpg?w640-h320-tc1",
  "belt_thumbnail": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FCris_Cyborg%252FCYBORG_CRIS_BELT.png?w600-h600-tc1",
  "left_full_body_image": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FCris_Cyborg%252FCYBORG_CRIS_L2.png?mh530",
  "right_full_body_image": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FCris_Cyborg%252FCYBORG_CRIS_L2.png?mh530",
  "profile_image": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Ffighter_images%252FCris_Cyborg%252FCYBORG_CRIS2.png?w600-h600-tc1",
  "link": "http://www.ufc.com/fighter/Cris-Cyborg"
  },
  {
  "id": 1161,
  "nickname": "Mighty Mouse",
  "wins": 26,
  "statid": 1495,
  "losses": 2,
  "last_name": "Johnson",
  "weight_class": "Flyweight",
  "title_holder": true,
  "draws": 1,
  "first_name": "Demetrious",
  "fighter_status": "Active",
  "rank": "C",
  "pound_for_pound_rank": "2",
  "thumbnail": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252Fgenerated_images_sorted%252FFighter%252FDemetrious-Johnson%252FDemetrious-Johnson_1161_medium_thumbnail.jpg?w640-h320-tc1",
  "belt_thumbnail": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FDemitrious_Johnson%252FJOHNSON_DEMETRIOUS_L-PRINT.png?w600-h600-tc1",
  "left_full_body_image": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FDemitrious_Johnson%252FJOHNSON_DEMETRIOUS_L.png?mh530",
  "right_full_body_image": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FDemitrious_Johnson%252FDemetrious-Johnson-WTTS-2015-02-27-236.png?mh530",
  "profile_image": "http://imagec.ufc.com/http%253A%252F%252Fmedia.ufc.tv%252F%252Ffighter_images%252FDemitrious_Johnson%252FJOHNSON_DEMETRIOUS.png?w600-h600-tc1",
  "link": "http://www.ufc.com/fighter/Demetrious-Johnson"
  }],
  currentFighter: {}
}

function fighterReducer (state = {}, action) {
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
