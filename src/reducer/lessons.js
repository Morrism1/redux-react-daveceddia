// @ts-nocheck
import produce from 'immer';
import {
  ADD_LESSON_SUCCESS
} from '../actions';

const initialState = {
  lessons: [],
  lessonSaveInProgress: false,
  lessonSaveError: null,
};

export const lessonReducer = produce((draft, action) => {
  switch (action.type) {
    case ADD_LESSON_SUCCESS:
      draft.lessons.push(action.payload);
      return;
    default:
      return;
  }
}, initialState);
