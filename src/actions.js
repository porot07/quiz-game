import { createAction } from 'redux-actions';

export const answerAdd = createAction('ADD_ANSWER');
export const incrementRightAnswer = createAction('INCREMENT_RIGHT_ANSWER');
export const decrementWrongAnswer = createAction('DECREMENT_WRONG_ANSWER');
export const questionIncrementCurrent = createAction('INCREMENT_QUESTION_CURRENT');
