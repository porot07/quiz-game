import axios from 'axios';
import { createAction } from 'redux-actions';

import routes from './routes';

export const addAnswer = createAction('ANSWER_ADD');
export const incrementRightAnswer = createAction('RIGHT_ANSWER_INCREMENT');
export const incrementWrongAnswer = createAction('WRONG_ANSWER_DECREMENT');

export const incrementQuestionCurrent = createAction('QUESTION_CURRENT_INCREMENT');

export const getQuestionsRequest = createAction('GET_QUESTION_REQUEST');
export const getQuestionsSuccess = createAction('GET_QUESTION_SUCCESS');
export const getQuestionsFailure = createAction('GET_QUESTION_FAILURE');

export const getQuestions = () => async (dispatch) => {
  dispatch(getQuestionsRequest());
  try {
    const response = await axios.get(routes.questions());
    // dispatch(answerGroupAdd(response));
    dispatch(getQuestionsSuccess(response));
  } catch (e) {
    dispatch(getQuestionsFailure());
  }
};
