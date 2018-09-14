import React from 'react'
import {Component} from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchTitle,
  SearchSwitch,
  SearchTab,
  SearchTabContent,
  Addition,
  Button
} from './style'
import {connect} from 'react-redux'
import {actionCreators} from './store'

class Header extends Component {
  constructor(props) {
    super(props)
    this.showSearchInfo = this.showSearchInfo.bind(this)
  }

  showSearchInfo() {
    if(this.props.focus) {
      return ( 
        <SearchInfo>
          <SearchTitle>
                标签
            <SearchSwitch>换一批</SearchSwitch>
          </SearchTitle>
          <SearchTab>
            <SearchTabContent>教育</SearchTabContent>
            <SearchTabContent>简书</SearchTabContent>
            <SearchTabContent>生活</SearchTabContent>
            <SearchTabContent>投稿</SearchTabContent>
            <SearchTabContent>历史</SearchTabContent>
            <SearchTabContent>PHP</SearchTabContent>
            <SearchTabContent>考研</SearchTabContent>
            <SearchTabContent>docker</SearchTabContent>
            <SearchTabContent>EOS</SearchTabContent>
          </SearchTab>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <Nav>
          <NavItem className="index">首页</NavItem>
          <NavItem className="download">下载App</NavItem>
          <NavItem className="search">
            <SearchWrapper>
              <NavSearch className={this.props.focus ? 'focus' : ''} onClick={this.props.changeToFocus} onBlur={this.props.changeToBlur}></NavSearch> 
              <i className={this.props.focus ? 'focus iconfont' : 'iconfont'}>&#xe627;</i>
              {this.showSearchInfo(this.props.focus)}
            </SearchWrapper>
          </NavItem>
          <NavItem className="aa">Aa</NavItem>
          <NavItem className="signIn">登陆</NavItem>
        </Nav>
        <Addition>
          <Button className="signUp">注册</Button>
          <Button className="write"><i className="iconfont">&#xe61c;</i>&nbsp;写文章</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    focus: state.get('header').get('focus')
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeToFocus() {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
    },
    changeToBlur() {
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)