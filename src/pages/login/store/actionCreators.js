import axios from 'axios'
import {actionTypes} from './index'

const changeLogin = () => {
  return {
    type: actionTypes.CHANGE_LOGIN,
    value: true
  }
}

export const handleLogin = (user, password) => {
  return dispatch => {
    axios.get(`/api/login.json?account=${user}&passworod=${password}`).then(
      res => {
        const result = res.data.data
        if(result) {
          dispatch(changeLogin())
        }else {
          console.log('登陆失败')
        }
      }
    )
  }
}

export const logout = () => {
  return {
    type: actionTypes.CHANGE_LOGOUT,
    value: false
  }
}