import { combineReducers } from 'redux'
import { courseReducer as courses } from './courses'
import { lessonReducer as lessons } from './lessons'

export default combineReducers({
  courses,
  lessons
})