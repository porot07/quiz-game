import React, { useState } from 'react';
import ListQuestion from './ListQuestion';
import questions from '../other/questions';
import Finally from './Finally';

const App = () => {
  const [answer, setAnswer] = useState('');
  const handleClick = (e) => {
    setAnswer(e.target.value);
  };
  // console.log(typeof answer);
  const [question, setQuestion] = useState(questions);
  const [currentCounter, setCounter] = useState(0);
  const [stat, setStat] = useState({ right: 0, wrong: 0 });
  // console.log(typeof check);
  const handleSubmit = (e) => {
    e.preventDefault();
    // setAnswer({ answer: null });
    // console.log(answer);
    answer === 'correct'
      ? setStat({ ...stat, right: stat.right + 1 })
      : setStat({ ...stat, wrong: stat.wrong + 1 });
    // console.log(answer);
    setCounter(currentCounter + 1);
    // console.log(question[1].answer === answer.answer ? 'Правильно' : 'Не очень правильно');
    // console.log(e.target.value);
  };
  return (
    <div className="container">
      {
        question[currentCounter]
          ? <ListQuestion
              question={question[currentCounter]}
              handleSubmit={handleSubmit}
              handleClick={handleClick}
            />
          : <Finally
              correctAnswers={stat}
            />
      }
    </div>
  );
};

export default App;
