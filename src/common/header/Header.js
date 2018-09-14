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
            {
              this.props.list.map(item => {
                return <SearchTabContent key={item.toString()}>{item}</SearchTabContent>
              })
            }
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
    focus: state.get('header').get('focus'),
    list: state.get('header').get('list')
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