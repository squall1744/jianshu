import React, { Component } from 'react'
import Header from './common/header/index'
import store from './store/store'
import {Provider} from 'react-redux'

export const App = (
  <Provider store={store}>
    <Header></Header>
  </Provider>

)