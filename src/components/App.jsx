import React from 'react';
import { useDispatch, connect } from 'react-redux';
import ListQuestion from './ListQuestion';
import Results from './Results';
import * as actions from '../actions';

const App = ({
  answer, rightAnswer, wrongAnswer,
  numCurrentQuestion, questionArr,
}) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(actions.answerAdd({ answer: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer === 'true') {
      dispatch(actions.incrementRightAnswer(rightAnswer));
    } else {
      dispatch(actions.decrementWrongAnswer(wrongAnswer));
    }
    dispatch(actions.questionIncrementCurrent(numCurrentQuestion));
  };
  return (
    <div className="container">
      {
        questionArr[numCurrentQuestion]
          ? <ListQuestion handleSubmit={handleSubmit} handleClick={handleClick} />
          : <Results />
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  answer: state.answers.answer,
  rightAnswer: state.answers.incRightAnswer,
  wrongAnswer: state.answers.decWrongAnswer,
  numCurrentQuestion: state.questions.currentQuestion,
  questionArr: state.questions.questionArr,
});

export default connect(mapStateToProps)(App);
