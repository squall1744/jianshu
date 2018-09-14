import axios from 'axios'
import {actionTypes} from './index'

export const searchFocus = () => {
  return {
    type: actionTypes.CHANGE_TO_FOCUS,
  }
}

export const searchBlur = () => {
  return {
    type: actionTypes.CHANGE_TO_BLUR,
  }
}

const changeList = () => {}

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data
      console.log(data)
    }).catch(() => {
      console.log(1234)
    })
  }
}