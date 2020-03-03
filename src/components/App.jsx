import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListQuestion from './ListQuestion';
import Results from './Results';
import Choose from './Choose';
import * as actions from '../actions';

const App = () => {
  const dispatch = useDispatch();
  const selectedAnswerValue = useSelector((state) => state.answers.answerValue);
  const rightCounterAnswer = useSelector((state) => state.answers.rightAnswer);
  const wrongCounterAnswer = useSelector((state) => state.answers.wrongAnswer);
  const numCurrentQuestion = useSelector((state) => state.questions.currentQuestion);
  const questions = useSelector((state) => state.questions.questions);
  const stateRender = useSelector((state) => state.questions.stateRender);
  const handleClick = (e) => {
    dispatch(actions.getValueAnswer({ answer: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedAnswerValue === 'true') {
      dispatch(actions.incrementRightAnswer(rightCounterAnswer));
    } else {
      dispatch(actions.incrementWrongAnswer(wrongCounterAnswer));
    }
    dispatch(actions.incrementQuestionCurrent(numCurrentQuestion));
  };
  console.log(stateRender);
  const renderComponents = () => {
    if (stateRender === 'choose') return <Choose />;
    return <Results />;
  };
  return (
    <div className="container">

      {
        questions[numCurrentQuestion]
          ? <ListQuestion handleSubmit={handleSubmit} handleClick={handleClick} />
          : renderComponents()
        //   ? <ListQuestion handleSubmit={handleSubmit} handleClick={handleClick} />
        //   : <div className=""><Choose /></div>
      }
    </div>
  );
};

export default App;
