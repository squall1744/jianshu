import React, { Component, Fragment } from 'react'
import Header from './common/header/Header'
import store from './store/store'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom' 

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header />      
          <BrowserRouter>
            <Fragment>
              <Route path="/" exact render={() => <div>ddd</div>}></Route>
              <Route path="/aaa" exact render={() => <div>xxx</div>}></Route>
            </Fragment>
          </BrowserRouter>
        </Fragment>
      </Provider>
    )
  }
}

export default App