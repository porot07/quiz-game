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
  const questions = useSelector((state) => state.questions.questions);
  const stateRender = useSelector((state) => state.questions.stateRender);
  const loadingState = useSelector((state) => state.questions.UIState);
  const dataError = useSelector((state) => state.questions.responseCodeState);
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
    if (numCurrentQuestion === (questions.length - 1)) {
      dispatch(actions.setStateQuestions('result'));
    }
  };
  console.log(stateRender);
  const renderComponents = (stateUI, loadState, dataErr) => {
    const processingError = (errorNum) => {
      switch (errorNum) {
        case 1:
          return <h1>Обнови страницу, выбрери другие значения</h1>;
        case 2:
          return <h1>Перед началом игры, введи правильные аргументы (Например, amount = five)</h1>;
        case 3:
          return <h1>Получи токен, без него никак!</h1>;
        case 4:
          return <h1>Token Empty Session - сбрось полученный токен</h1>;
        default:
          return <h1>Все хорошо, ПРИЯТНОЙ ИГРЫ USERNAME!</h1>;
      }
    };

    switch (stateUI) {
      case 'question': return loadState === 'success' ? <ListQuestion handleSubmit={handleSubmit} handleClick={handleClick} /> : <div className="message-error"><h1>Идёт загрузка подождите немного...</h1></div>;
      case 'error': return <div className="message-error">{processingError(dataErr)}</div>;
      case 'result': return <Results />;
      default:
    }
  };
  return (
    <div className="container">
      {
        stateRender === 'choose'
          ? <Choose />
          : renderComponents(stateRender, loadingState, dataError)
      }
    </div>
  );
};

export default App;
