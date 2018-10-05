import React, { Component, Fragment } from 'react'
import Header from './common/header/Header'
import store from './store/store'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom' 
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Header />      
            <Route path="/" exact component={Home}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
          </Fragment>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App