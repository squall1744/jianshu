import React, {Component} from 'react'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'
import {actionCreators} from './store'
import {connect} from 'react-redux'

class Home extends Component {
  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  handleScrollTop() {
    window.scrollTo(0, 0)
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
        {this.props.scorllTop ? (<BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>) : null}
      </HomeWrapper>
    )
  }
}

const mapState = state => {
  return {
    scorllTop: state.getIn(['home', 'scrollTop'])
  }
}

const mapDispatch = dispatch => {
  return {
    changeHomeData() {
      dispatch(actionCreators.getHomeData())
    },
    changeScrollTopShow() {
      if(document.documentElement.scrollTop >= 200) {
        dispatch(actionCreators.changeScrollTopShow(true))
      }else {
        dispatch(actionCreators.changeScrollTopShow(false))
      }
    }
  }
}

export default connect(mapState, mapDispatch)(Home)