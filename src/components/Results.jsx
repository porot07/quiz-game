import React from 'react';

const Results = ({ correctAnswers }) => {
  return (
    <div className="results">
      <h1>{correctAnswers.right} - Правильно</h1>
      <h1>{correctAnswers.wrong} - Не правильно</h1>
      <form onSubmit={() => {}}>
        <button type="submit">Начать тест заново</button>
      </form>
    </div>
  );
};

export default Results;
