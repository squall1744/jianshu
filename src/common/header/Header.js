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
    const page = this.props.page
    const totalPage = this.props.totalPage
    const list = this.props.list.toJS()
    const pageList = []
    if(list.length) {
      for(let i=page*10; i<(page+1)*10; i++) {
        if(list[i]){
          pageList.push(<SearchTabContent key={list[i]}>{list[i]}</SearchTabContent>)
        }else {
          break
        }
      }
    }

    if(this.props.focus || this.props.mouseIn) {
      return ( 
        <SearchInfo onMouseEnter={this.props.changeToMouseEnter} onMouseLeave={this.props.changeToMouseLeave}>
          <SearchTitle>
                标签
            <SearchSwitch onClick={() => {this.props.handleChangePage(page, totalPage, this.icon)}}><i ref={(item) => {this.icon = item}}className="iconfont switch">&#xe604;</i>换一批</SearchSwitch>
          </SearchTitle>
          <SearchTab>
            {pageList}
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
              <NavSearch className={this.props.focus ? 'focus' : ''} onClick={() => {this.props.changeToFocus(this.props.list)}} onBlur={this.props.changeToBlur}></NavSearch> 
              <i className={this.props.focus ? 'focus search iconfont' : 'search iconfont'}>&#xe600;</i>
              {this.showSearchInfo()}
            </SearchWrapper>
          </NavItem>
          <NavItem className="aa">Aa</NavItem>
          <NavItem className="signIn">登陆</NavItem>
        </Nav>
        <Addition>
          <Button className="signUp">注册</Button>
          <Button className="write"><i className="iconfont">&#xe727;</i>&nbsp;写文章</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    focus: state.get('header').get('focus'),
    list: state.get('header').get('list'),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage'])

  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeToFocus(list) {
      if(list.size === 0) {
        dispatch(actionCreators.getList())
      }
      dispatch(actionCreators.searchFocus())
    },
    changeToBlur() {
      dispatch(actionCreators.searchBlur())
    },
    changeToMouseEnter() {
      dispatch(actionCreators.mouseIn())
    },
    changeToMouseLeave() {
      dispatch(actionCreators.mouseOut()) 
    },
    handleChangePage(page, totalPage, icon) {
      let originAngle = icon.style.transform.replace(/[^0-9]/ig, '')
      if(originAngle) {
        originAngle = parseInt(originAngle, 10)
      }else {
        originAngle = 0
      }
      icon.style.transform = `rotate(${originAngle+360}deg)`
      if(page < (totalPage-1)) {
        dispatch(actionCreators.changePage(page+1))
      }else {
        dispatch(actionCreators.changePage(0))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)