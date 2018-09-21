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

const getHomeList = (HomeList, page) => {
  const data = HomeList.data
  return {
    type: actionTypes.LOAD_MORE,
    articleList: fromJS(data.articleList),
    articlePage: page
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

export const loadMore = (page) => {
  return dispatch => {
    axios.get(`/api/homeList.json?page=${page}`).then(res => {
      dispatch(getHomeList(res.data, page + 1))
    }).catch(() => {
      console.log('error')
    })
  }
}

export const changeScrollTopShow = (show) => {
  return {
    type: actionTypes.CHANGE_SCROLL_TOP,
    show
  } 
}