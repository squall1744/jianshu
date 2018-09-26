import {fromJS} from 'immutable'
import {actionTypes} from './index'

const defaultState = fromJS({
  title: '',
  content: `
  <img src="https://upload-images.jianshu.io/upload_images/13133049-5b1a1734918a0d10.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/582/format/webp" alt="" />
  <p>dfdfdfdsfsadfsadfasdfafasd</p>
  `
})

export default (state = defaultState, action) => {
  return state
}