import {actionTypes} from './index'
import { fromJS } from 'immutable'


const defaultState = fromJS({
  focus: false,
  mouseIn: false,
  list: [],
  page: 0,
  totalPage: 1
}) 

export default (state = defaultState, action) => {
  switch(action.type) {
  case actionTypes.CHANGE_TO_FOCUS:
    return state.set('focus', true)
  case actionTypes.CHANGE_TO_BLUR:
    return state.set('focus', false)
  case actionTypes.CHANGE_LIST:
    return state.merge({
      list: action.data,
      totalPage: action.totalPage
    })
  case actionTypes.CHANGE_TO_MOUSEENTER:
    return state.set('mouseIn', true)
  case actionTypes.CHANGE_TO_MOUSELEAVE:
    return state.set('mouseIn', false)
  case actionTypes.CHANGE_PAGE:
    return state.set('page', action.page)
  default:
    return state
  }
}