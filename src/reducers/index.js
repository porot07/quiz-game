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
  [actions.getQuestionsSuccess](state, { payload }) {
    return {
      ...state,
      questions: payload.map((object) => ({
        id: uniqueId(),
        title: object.question,
        answers: shuffle([object.correct_answer, ...object.incorrect_answers]).map((answer) => ({
          title: answer,
          isCorrect: answer === object.correct_answer,
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
  [actions.setStateQuestions](state, { payload }) {
    return {
      ...state,
      stateRender: payload,
    };
  },
}, {
  questions: [],
  stateRender: 'choose',
  currentQuestion: 0,
});

const queryList = handleActions({
  [actions.userChooseAmount](state, { payload }) {
    return {
      ...state,
      amount: payload,
    };
  },
  [actions.userChooseCategory](state, { payload }) {
    return {
      ...state,
      category: payload,
    };
  },
  [actions.userChooseDifficult](state, { payload }) {
    return {
      ...state,
      difficulty: payload,
    };
  },
  [actions.userChooseType](state, { payload }) {
    return {
      ...state,
      type: payload,
    };
  },
}, {
  amount: 10,
  category: '',
  difficulty: '',
  type: '',
});


export default combineReducers({
  answers,
  questions,
  queryList,
});
