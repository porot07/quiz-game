import React from 'react';
import { useSelector } from 'react-redux';

const Results = () => {
  const right = useSelector((state) => state.answers.rightAnswer);
  const wrong = useSelector((state) => state.answers.wrongAnswer);
  return (
    <div className="results">
      <h1>{ right } - Правильно</h1>
      <h1>{ wrong } - Не правильно</h1>
      <form onSubmit={() => {}}>
        <button type="submit">Начать тест заново</button>
      </form>
    </div>
  );
};


export default Results;
