import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListQuestion from './ListQuestion';
import Results from './Results';
import * as actions from '../actions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getQuestions());
  }, {});
  const answer = useSelector((state) => state.answers.answer);
  const rightAnswer = useSelector((state) => state.answers.incRightAnswer);
  const wrongAnswer = useSelector((state) => state.answers.decWrongAnswer);
  const numCurrentQuestion = useSelector((state) => state.questionsReducer.currentQuestion);
  const questionArr = useSelector((state) => state.questionsReducer.questions);
  const asyncGetQuestion = useSelector((state) => state.getQuestionReducer.questions);
  console.log(asyncGetQuestion);
  const handleClick = (e) => {
    dispatch(actions.addAnswer({ answer: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer === 'true') {
      dispatch(actions.incrementRightAnswer(rightAnswer));
    } else {
      dispatch(actions.decrementWrongAnswer(wrongAnswer));
    }
    dispatch(actions.incrementQuestionCurrent(numCurrentQuestion));
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

export default App;
