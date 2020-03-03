import axios from 'axios';
import { createAction } from 'redux-actions';

import routes from './routes';

export const getValueAnswer = createAction('ANSWER_ADD');
export const incrementRightAnswer = createAction('RIGHT_ANSWER_INCREMENT');
export const incrementWrongAnswer = createAction('WRONG_ANSWER_DECREMENT');

export const incrementQuestionCurrent = createAction('QUESTION_CURRENT_INCREMENT');

export const getQuestionsRequest = createAction('GET_QUESTION_REQUEST');
export const getQuestionsSuccess = createAction('GET_QUESTION_SUCCESS');
export const getQuestionsFailure = createAction('GET_QUESTION_FAILURE');
export const setStateQuestions = createAction('STATE_QUESTIONS_SET');

export const getQuestions = (values) => async (dispatch) => {
  dispatch(getQuestionsRequest());
  console.log(values);
  try {
    const response = await axios.get(routes.questions(), {
      params: values,
    });
    dispatch(getQuestionsSuccess(response.data.results));
  } catch (e) {
    dispatch(getQuestionsFailure());
  }
};

export const userChooseDifficult = createAction('USER_DIFFICULT_CHOOSE');
export const userChooseType = createAction('USER_TYPE_CHOOSE');
export const userChooseAmount = createAction('USER_AMOUNT_CHOOSE');
export const userChooseCategory = createAction('USER_CATEGORY_CHOOSE');
