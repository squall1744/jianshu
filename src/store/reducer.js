import { reducer as headerReducer } from '../common/header/store'
import {reducer as homeRedcuer} from '../pages/home/store'
import { combineReducers } from 'redux-immutable'


export default combineReducers({
  header: headerReducer,
  home: homeRedcuer
})