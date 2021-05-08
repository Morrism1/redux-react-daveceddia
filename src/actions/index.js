import { courseCreate, getCourses } from "../api"

export const ADD_COURSE_BEGIN = 'ADD_COURSE_BEGIN'
export const ADD_COURSE_SUCCESS = 'ADD_COURSE_SUCCESS'
export const ADD_COURSE_ERROR = 'ADD_COURSE_ERROR'
export const LOAD_COURSE_BEGIN = 'LOAD_COURSE_BEGIN'
export const LOAD_COURSE_SUCCESS = 'LOAD_COURSE_SUCCESS'
export const LOAD_COURSE_ERROR = 'LOAD_COURSE_ERROR'

export const addCourse = (name, price) => {
  return dispatch => {
    dispatch({ type: ADD_COURSE_BEGIN })
    courseCreate(name, price)
      .then(course => {
        dispatch({ type: ADD_COURSE_SUCCESS, payload: course })
      })
      .catch(error => {
        dispatch({ type: ADD_COURSE_ERROR, error })
      })
  }
}

export const loadCourses = () => {
  return dispatch => {
    dispatch({ type: LOAD_COURSE_BEGIN })
    getCourses()
      .then(courses => {
        dispatch({ type: LOAD_COURSE_SUCCESS, payload: courses })
      })
      .catch(error => {
        dispatch({ type: LOAD_COURSE_ERROR, error })
      })
  }
}