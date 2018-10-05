import {actionTypes} from './index'
import axios from 'axios'
import {fromJS} from 'immutable'

const changeDetail = data => {
  return {
    type: actionTypes.GET_DETAIL,
    title: fromJS(data.title),
    content: fromJS(data.content)
  }
}


export const getDetail = (id) => {
  return dispatch => {
    axios.get(`/api/detail.json?id=${id}`).then(res => {
      const result = res.data.data
      dispatch(changeDetail(result))
    })
  }
}