import { createStore, applyMiddleware } from 'redux'

import fighterReducer from './reducer'
import reduxThunk from 'redux-thunk'

const store = createStore(fighterReducer, applyMiddleware(reduxThunk))

export default store
