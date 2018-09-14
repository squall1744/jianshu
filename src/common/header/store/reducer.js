import {actionTypes} from './index'
import { fromJS } from 'immutable'


const defaultState = fromJS({
  focus: false,
  list: []
}) 

export default (state = defaultState, action) => {
  switch(action.type) {
  case actionTypes.CHANGE_TO_FOCUS:
    return state.set('focus', true)
  case actionTypes.CHANGE_TO_BLUR:
    return state.set('focus', false)
  case actionTypes.CHANGE_LIST:
    return state.set('list', action.data) 
  default:
    return state
  }
}