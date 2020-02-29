import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import questions from '../questions';

import * as actions from '../actions';

const answers = handleActions({
  [actions.addAnswer](state, { payload: { answer } }) {
    return {
      ...state,
      answer,
    };
  },
  [actions.incrementRightAnswer](state, { payload }) {
    return {
      ...state,
      incRightAnswer: payload + 1,
    };
  },
  [actions.decrementWrongAnswer](state, { payload }) {
    return {
      ...state,
      decWrongAnswer: payload + 1,
    };
  },
}, {
  answer: '',
  incRightAnswer: 0,
  decWrongAnswer: 0,
});

const questionsReducer = handleActions({
  [actions.incrementQuestionCurrent](state, { payload }) {
    return {
      ...state,
      currentQuestion: payload + 1,
    };
  },
}, {
  currentQuestion: 0,
  questions: [...questions],
});

const getQuestionReducer = handleActions({
  [actions.getQuestionsRequest](state) {
    return state;
  },
  [actions.getQuestionsSuccess](state, { payload: { data: { results } } }) {
    return {
      ...state,
      questions: results,
    };
  },
}, {
  questions: [],
});


export default combineReducers({
  answers,
  questionsReducer,
  getQuestionReducer,
});
