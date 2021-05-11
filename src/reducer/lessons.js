// @ts-nocheck
import produce from 'immer';
import {
  ADD_LESSON_SUCCESS,
  ADD_LESSON_BEGIN,
  ADD_LESSON_ERROR,
  LOAD_LESSON_BEGIN,
  LOAD_LESSON_SUCCESS,
  LOAD_LESSON_ERROR,
  SAVE_LESSON_ERROR,
  SAVE_LESSON_BEGIN,
  SAVE_LESSON_SUCCESS,
} from '../actions';

const initialState = {
  lessons: {},
  lessonSaveInProgress: false,
  lessonSaveError: null,
};

export const lessonReducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_LESSON_BEGIN:
    case SAVE_LESSON_BEGIN:
      draft.lessonSaveInProgress = true;
      draft.lessonSaveError = null
      return;
    case ADD_LESSON_SUCCESS:
    case SAVE_LESSON_SUCCESS:
      draft.lessons[action.payload.id] = action.payload;
      return;
    case ADD_LESSON_ERROR:
    case SAVE_LESSON_ERROR:
      draft.lessonSaveInProgress = false;
      draft.lessonSaveError = action.error;
      return;
    case LOAD_LESSON_BEGIN:
      draft.lessonSaveInProgress = true;
      draft.lessonSaveError = null;
      return;
    case LOAD_LESSON_SUCCESS:
      draft.lessonSaveInProgress = false;
      action.payload.forEach((lesson) => (draft.lessons[lesson.id] = lesson));
      return;
    case LOAD_LESSON_ERROR:
      draft.lessonSaveInProgress = false;
      draft.lessonSaveError = action.error;
      return;
    default:
      return;
  }
}, initialState);
