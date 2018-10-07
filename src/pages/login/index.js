import React, {Component} from 'react'
import {connect} from 'react-redux'
import {LoginWrapper, LoginBox, Input, Button} from './style'
import {Redirect} from 'react-router-dom'
import { actionCreators } from './store'


class Login extends Component {
  render() {
    const {login} = this.props
    if(!login) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" innerRef={input => this.username = input}/>
            <Input placeholder="密码" type="password" innerRef={input => this.password = input}/>
            <Button onClick={() => this.props.handleLogin(this.username, this.password)}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      )
    }else {
      return <Redirect to="/" />
    }

  }
}

const mapState = state => {
  return {
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatch = dispatch => {
  return {
    handleLogin(name, password) {
      dispatch(actionCreators.handleLogin(name.value, password.value))
    }
  }
}
export default connect(mapState, mapDispatch)(Login)