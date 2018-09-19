import {fromJS} from 'immutable' 
import {actionTypes} from './index'

const defaultState = fromJS({
  topicList: [],
  articleList: []
})

export default (state = defaultState, action) => {
  switch(action.type) {
  case actionTypes.CHANGE_HOME_DATA:
    return state.merge({
      topicList: action.topicList,
      articleList: action.articleList
    })
  default:
    return state
  }
}