import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store';
import FighterList from './components/FighterList'
import { BrowserRouter, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <BrowserRouter>
          <Route exact path='/' component={FighterList} />
          <Route exact path='/:id' component={FighterDetail} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
