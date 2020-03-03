import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ListQuestion from './ListQuestion';
import Results from './Results';
import Choose from './Choose';
import Error from './Error';
import * as actions from '../actions';

const App = () => {
  const dispatch = useDispatch();
  const selectedAnswerValue = useSelector((state) => state.answers.answerValue);
  const rightCounterAnswer = useSelector((state) => state.answers.rightAnswer);
  const wrongCounterAnswer = useSelector((state) => state.answers.wrongAnswer);
  const numCurrentQuestion = useSelector((state) => state.questions.currentQuestion);
  // const questions = useSelector((state) => state.questions.questions);
  const stateRender = useSelector((state) => state.questions.stateRender);
  const loadingState = useSelector((state) => state.questions.UIState);
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
  const renderComponents = (stateUI, loadState) => {
    if (stateUI === 'question') return loadState === 'success' ? <ListQuestion handleSubmit={handleSubmit} handleClick={handleClick} /> : <h1>Подождите чуть-чуть... Идёт загрузка</h1>;
    return <Results />;
  };
  return (
    <div className="container">

      {
        stateRender === 'choose'
          ? <Choose />
          : renderComponents(stateRender, loadingState)
        //   ? <ListQuestion handleSubmit={handleSubmit} handleClick={handleClick} />
        //   : <div className=""><Choose /></div>
      }
      {
        stateRender >= 1 || stateRender <= 4 ? <Error /> : null
      }
    </div>
  );
};

export default App;
