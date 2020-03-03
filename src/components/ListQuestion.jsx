import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Error from './Error';

const ListQuestion = ({
  handleSubmit, handleClick,
}) => {
  const asyncQuestions = useSelector((state) => state.questions.questions);
  const numberCurrentQuestion = useSelector((state) => state.questions.currentQuestion);
  const questions = asyncQuestions[numberCurrentQuestion];
  // useEffect(() => setInterval(() => {
  //   <Error />;
  // }, 1000), []);
  return (
    <div className="list-container">
      <header>
        <p>
          Вопрос №
          {questions.id}
        </p>
        <p>Узнай на что ты способен!</p>
      </header>
      <p className="question"><span>{questions.title}</span></p>
      <form className="radio-container" onSubmit={handleSubmit}>
        {
          questions.answers.map((answer, id) => (
            <p className={`variant-${id}`} key={answer.title}>
              <input id={`variant-${id}`} type="radio" name="check-answer" value={answer.isCorrect} required onClick={handleClick} />
              <label htmlFor={`variant-${id}`}><span>{answer.title}</span></label>
            </p>
          ))
        }
        <button type="submit">Далее</button>
      </form>
    </div>
  );
};

export default ListQuestion;
