import { createStore } from 'redux';

import fighterReducer from './reducer'

const store = createStore(fighterReducer);

export default store
