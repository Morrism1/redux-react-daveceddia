// @ts-nocheck
import produce from 'immer';
import {
  ADD_COURSE_BEGIN,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_ERROR,
  LOAD_COURSE_BEGIN,
  LOAD_COURSE_SUCCESS,
  LOAD_COURSE_ERROR,
} from '../actions';

const initialState = {
  saveInProgress: false,
  saveError: null,
  courses: [],
  coursesLoading: false,
  coursesError: null,
};

export const reducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_COURSE_BEGIN:
      draft.saveInProgress = true;
      draft.saveError = null;
      return;
    case ADD_COURSE_SUCCESS:
      draft.saveInProgress = false;
      draft.courses.push(action.payload);
      return;
    case ADD_COURSE_ERROR:
      draft.saveInProgress = false;
      draft.saveError = action.error;
      return;
    case LOAD_COURSE_BEGIN:
      draft.coursesLoading = true;
      return;
    case LOAD_COURSE_SUCCESS:
      draft.courses = action.payload
      draft.coursesLoading = false;
      return;
    case LOAD_COURSE_ERROR:
      draft.coursesLoading = false;
      draft.coursesError = action.error;
      return;
    default:
      return;
  }
}, initialState);
