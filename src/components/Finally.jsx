import React from 'react';

const Finally = (props) => {
  const { correctAnswers } = props;
  console.log(correctAnswers);
  return (
    <div className="finalizer">
      <h1>{correctAnswers.right} - Правильно</h1>
      <h1>{correctAnswers.wrong} - Не правильно</h1>
    </div>
  );
};

export default Finally;
