import React from 'react';

const Results = ({ correctAnswers }) => {
  console.log(correctAnswers);
  return (
    <div className="results">
      <h1>{correctAnswers.right} - Правильно</h1>
      <h1>{correctAnswers.wrong} - Не правильно</h1>
    </div>
  );
};

export default Results;
