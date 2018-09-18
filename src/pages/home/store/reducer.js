import {fromJS} from 'immutable' 

const defaultState = fromJS({
  topicList: [
    {
      id: 0,
      title: '@IT.互联网',
      imgURL: 'https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    },
    {
      id: 1,
      title: '读书',
      imgURL: 'https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
    }
  ]
})

export default (state = defaultState, action) => {
  switch(action.type) {
  default:
    return state
  }
}