import {fromJS} from 'immutable' 
import {actionTypes} from './index'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 0,
  scrollTop: false
})

export default (state = defaultState, action) => {
  switch(action.type) {
  case actionTypes.CHANGE_HOME_DATA:
    return state.merge({
      topicList: action.topicList,
      articleList: action.articleList,
      recommendList: action.recommendList
    })
  case actionTypes.LOAD_MORE:
    return state.merge({
      articleList: state.get('articleList').concat(action.articleList),
      articlePage: action.articlePage
    })
  case actionTypes.CHANGE_SCROLL_TOP:
    return state.set('scrollTop', action.show)
  default:
    return state
  }
}