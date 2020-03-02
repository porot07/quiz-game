import axios from 'axios';
import { createAction } from 'redux-actions';

export const getValueAnswer = createAction('ANSWER_ADD');
export const incrementRightAnswer = createAction('RIGHT_ANSWER_INCREMENT');
export const incrementWrongAnswer = createAction('WRONG_ANSWER_DECREMENT');

export const incrementQuestionCurrent = createAction('QUESTION_CURRENT_INCREMENT');

export const getQuestionsRequest = createAction('GET_QUESTION_REQUEST');
export const getQuestionsSuccess = createAction('GET_QUESTION_SUCCESS');
export const getQuestionsFailure = createAction('GET_QUESTION_FAILURE');

export const getQuestions = () => async (dispatch) => {
  dispatch(getQuestionsRequest());
  try {
    const response = await axios.get('https://opentdb.com/api.php', {
      params: {
        amount: 50,
        difficulty: 'medium',
        type: 'multiple',
      },
    });
    dispatch(getQuestionsSuccess(response.data.results));
  } catch (e) {
    dispatch(getQuestionsFailure());
  }
};
