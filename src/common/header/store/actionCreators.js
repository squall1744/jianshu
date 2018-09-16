import axios from 'axios'
import {actionTypes} from './index'
import {fromJS} from 'immutable'

const changeList = data => {
  return {
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10) 
  }
}

export const searchFocus = () => {
  return {
    type: actionTypes.CHANGE_TO_FOCUS
  }
}

export const searchBlur = () => {
  return {
    type: actionTypes.CHANGE_TO_BLUR
  }
}

export const mouseIn = () => {
  return {
    type: actionTypes.CHANGE_TO_MOUSEENTER
  }
}

export const mouseOut = () => {
  return {
    type: actionTypes.CHANGE_TO_MOUSELEAVE
  }
}

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data
      dispatch(changeList(data.data)) 
    }).catch(() => {
      console.log(1234)
    })
  }
}

export const changePage = (page) => {
  return {
    type: actionTypes.CHANGE_PAGE,
    page
  }
}