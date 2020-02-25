import React from 'react';

const ListQuestion = (props) => {
  const { question, handleSubmit, handleClick } = props;
  return (
    <div className="list-container">
      <header>
        <p className="number-question">Вопрос №{question.id}</p>
        <p className="logotext">Узнай на что ты способен!</p>
      </header>
      <p className="question"><span>{question.question}</span></p>
      <form className="radio-container" onSubmit={handleSubmit}>
          <p className="variant-A">
            <input id="variant-A" type="radio" name="check-answer" value={question.answers.answerOne.isRight} required onClick={handleClick} />
            <label htmlFor="variant-A"><span>{question.answers.answerOne.value}</span></label>
          </p>

          <p className="variant-B">
            <input id="variant-B" type="radio" name="check-answer" value={question.answers.answerTwo.isRight} required onClick={handleClick} />
            <label htmlFor="variant-B"><span>{question.answers.answerTwo.value}</span></label>
          </p>

          <p className="variant-C">
            <input id="variant-C" type="radio" name="check-answer" value={question.answers.answerThree.isRight} required onClick={handleClick} />
            <label htmlFor="variant-C"><span>{question.answers.answerThree.value}</span></label>
          </p>

          <p className="variant-D">
            <input id="variant-D" type="radio" name="check-answer" value={question.answers.answerFour.isRight} required onClick={handleClick} />
            <label htmlFor="variant-D"><span>{question.answers.answerFour.value}</span></label>
          </p>
        <button type="submit">Далее</button>
      </form>

    </div>
  );
};

export default ListQuestion;
