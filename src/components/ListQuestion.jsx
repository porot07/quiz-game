import React from 'react';
import { useSelector } from 'react-redux';

const ListQuestion = ({
  handleSubmit, handleClick,
}) => {
  const questionsArr = useSelector((state) => state.questionsReducer.questions);
  const asyncQuestionArr = useSelector((state) => state.getQuestionReducer.questions);
  const numberCurrentQuestion = useSelector((state) => state.questionsReducer.currentQuestion);
  const questions = questionsArr[numberCurrentQuestion];

  return (
    <div className="list-container">
      <header>
        <p>
          Вопрос №
          {questions.id}
        </p>
        <p>Узнай на что ты способен!</p>
      </header>
      <p className="question"><span>{questions.question}</span></p>
      <form className="radio-container" onSubmit={handleSubmit}>
        {
          questions.answers.map((answer, id) => (
            <p className={`variant-${id}`} key={answer.value}>
              {/* Здесь надо как-то использовать ID от самих вопросов... Пока надо подумать как... Поставил заглушкой от ID массивов (знаю что не совсем так правильно делать) */}
              <input id={`variant-${id}`} type="radio" name="check-answer" value={answer.isCorrectly} required onClick={handleClick} />
              <label htmlFor={`variant-${id}`}><span>{answer.value}</span></label>
            </p>
          ))
        }
        <button type="submit">Далее</button>
      </form>
    </div>
  );
};

export default ListQuestion;
