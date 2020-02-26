import React, { useState } from 'react';
import ListQuestion from './ListQuestion';
import questions from '../questions';
import Results from './Results';

const App = () => {
  const [answer, setAnswer] = useState('');
  const handleClick = (e) => {
    setAnswer(e.target.value);
    // console.log(e.target.value);
  };
  const [question, setQuestion] = useState(questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [stat, setStat] = useState({ right: 0, wrong: 0 });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer === 'correct') {
      setStat({ ...stat, right: stat.right + 1 });
    } else {
      setStat({ ...stat, wrong: stat.wrong + 1 });
    }
    setCurrentQuestion(currentQuestion + 1);
  };
  return (
    <div className="container">
      {
        question[currentQuestion]
          ? (
            <ListQuestion
              question={question[currentQuestion]}
              handleSubmit={handleSubmit}
              handleClick={handleClick}
            />
          )
          : (
            <Results
              correctAnswers={stat}
              reset={setStat}
              values={stat}
            />
          )
      }
    </div>
  );
};

export default App;
