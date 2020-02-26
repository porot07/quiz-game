import React, { useState } from 'react';
import App from './App';

const Results = ({ correctAnswers }) => {
  const [reset, setResetState] = useState('result');
  const handleSubmit = (e) => {
  };

  return (
    <div className="results">
      <h1>{correctAnswers.right} - Правильно</h1>
      <h1>{correctAnswers.wrong} - Не правильно</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Начать тест заново</button>
      </form>

    </div>
  );
};

export default Results;
