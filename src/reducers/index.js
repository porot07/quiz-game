import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { shuffle } from 'lodash';

import * as actions from '../actions';

const answers = handleActions({
  [actions.addAnswer](state, { payload: { answer } }) {
    return {
      ...state,
      answerSelect: answer,
    };
  },
  [actions.incrementRightAnswer](state, { payload }) {
    return {
      ...state,
      incRightAnswer: payload + 1,
    };
  },
  [actions.incrementWrongAnswer](state, { payload }) {
    return {
      ...state,
      decWrongAnswer: payload + 1,
    };
  },
}, {
  answerSelect: '',
  incRightAnswer: 0,
  decWrongAnswer: 0,
});

const questions = handleActions({
  [actions.getQuestionsRequest](state) {
    return state;
  },
  [actions.getQuestionsSuccess](state, { payload: { data: { results } } }) {
    return {
      ...state,
      questions: results.map((object) => ({
        title: object.question,
        answers: shuffle([object.correct_answer, ...object.incorrect_answers]).map((answer) => ({
          title: answer,
          isCorrect: answer === object.correct_answer ? 'true' : 'false',
        })),
      })),
    };
  },
  [actions.incrementQuestionCurrent](state, { payload }) {
    return {
      ...state,
      currentQuestion: payload + 1,
    };
  },
}, {
  questions: [],
  currentQuestion: 0,
});


export default combineReducers({
  answers,
  questions,
});
