import {actionTypes} from './index'
import { fromJS } from 'immutable'


const defaultState = fromJS({
  focus: false,
  list: []
}) 

export default (state = defaultState, action) => {
  if(action.type === actionTypes.CHANGE_TO_FOCUS) {
    return state.set('focus', true)
  }
  if(action.type === actionTypes.CHANGE_TO_BLUR) {
    return state.set('focus', false)
  }
  if(action.type === actionTypes.CHANGE_LIST) {
    return state.set('list', action.data) 
  }
  return state
}