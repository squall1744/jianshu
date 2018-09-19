import axios from 'axios'
import {actionTypes} from './index'
import { fromJS } from 'immutable'


const changeData = homeData => {
  const data = homeData.data
  return {
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: fromJS(data.topicList),
    articleList: fromJS(data.articleList),
    recommendList: fromJS(data.recommendList)
  }
}

export const getHomeData = () => {
  return dispatch => {
    axios.get('/api/home.json').then(res => {
      dispatch(changeData(res.data))
    }).catch(() => {
      console.log('error')
    })
  }
}