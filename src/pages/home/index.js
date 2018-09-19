import React, {Component} from 'react'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'
import {actionCreators} from './store'
import {connect} from 'react-redux'

class Home extends Component {
  componentDidMount() {
    this.props.changeHomeData()
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4463/b6b848a9c9c822040c3be80c2dd1d72a3825fba8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    changeHomeData() {
      dispatch(actionCreators.getHomeData())
    }
  }
}

export default connect(null, mapDispatch)(Home)