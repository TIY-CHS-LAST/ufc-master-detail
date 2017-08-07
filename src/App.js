import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import FighterList from './components/FighterList'
import FighterDetail from './components/FightDetail'
import { BrowserRouter, Route } from 'react-router-dom'
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={FighterList} />
            <Route exact path='/:fighterId' component={FighterDetail} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
