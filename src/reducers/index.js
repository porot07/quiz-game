import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';

import questionsArray from "../questions";

import * as actions from '../actions';

const answers = handleActions({
  [actions.answerAdd](state, { payload: { answer } }) {
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

const questions = handleActions({
  [actions.questionIncrementCurrent](state, { payload }) {
    return {
      ...state,
      currentQuestion: payload + 1,
    };
  },
}, {
  currentQuestion: 0,
  questionArr: [...questionsArray],
});


export default combineReducers({
  answers,
  questions,
});
