import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { uniqueId, shuffle } from 'lodash';

import * as actions from '../actions';

const answers = handleActions({
  [actions.getValueAnswer](state, { payload: { answer } }) {
    return {
      ...state,
      answerValue: answer,
    };
  },
  [actions.incrementRightAnswer](state, { payload }) {
    return {
      ...state,
      rightAnswer: payload + 1,
    };
  },
  [actions.incrementWrongAnswer](state, { payload }) {
    return {
      ...state,
      wrongAnswer: payload + 1,
    };
  },
}, {
  answerValue: '',
  rightAnswer: 0,
  wrongAnswer: 0,
});

const questions = handleActions({
  [actions.getQuestionsRequest](state) {
    return state;
  },
  [actions.getQuestionsSuccess](state, { payload: { data: { results } } }) {
    return {
      ...state,
      questions: results.map((object) => ({
        id: uniqueId(),
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
