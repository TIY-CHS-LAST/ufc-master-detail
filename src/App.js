import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store';
import FighterList from './components/FighterList'

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <FighterList />
      </Provider>
    );
  }
}

export default App;
