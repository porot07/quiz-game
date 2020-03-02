import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListQuestion from './ListQuestion';
import Results from './Results';
import * as actions from '../actions';

const App = () => {
  const dispatch = useDispatch();
  const answerSelect = useSelector((state) => state.answers.answerSelect);
  const rightAnswer = useSelector((state) => state.answers.incRightAnswer);
  const wrongAnswer = useSelector((state) => state.answers.decWrongAnswer);
  const numCurrentQuestion = useSelector((state) => state.questions.currentQuestion);
  const asyncGetQuestion = useSelector((state) => state.questions.questions);
  const handleClick = (e) => {
    dispatch(actions.addAnswer({ answer: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (answerSelect === 'true') {
      dispatch(actions.incrementRightAnswer(rightAnswer));
    } else {
      dispatch(actions.incrementWrongAnswer(wrongAnswer));
    }
    dispatch(actions.incrementQuestionCurrent(numCurrentQuestion));
  };
  useEffect(() => {
    dispatch(actions.getQuestions());
  }, []);
  return (
    <div className="container">
      {
        asyncGetQuestion[numCurrentQuestion]
          ? <ListQuestion handleSubmit={handleSubmit} handleClick={handleClick} />
          : <Results />
      }
    </div>
  );
};

export default App;
