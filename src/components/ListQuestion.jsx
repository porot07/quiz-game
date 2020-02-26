import React from 'react';
import { uniqueId } from 'lodash';

const ListQuestion = ({
  question, handleSubmit, handleClick,
}) => (
  <div className="list-container">
    <header>
      <p>
        Вопрос №
        {question.id}
      </p>
      <p>Узнай на что ты способен!</p>
    </header>
    <p className="question"><span>{question.question}</span></p>
    <form className="radio-container" onSubmit={handleSubmit}>
      {
        question.answers.map((answer, id) => (
          <p className={`variant-${id}`} key={uniqueId()}>
            <input id={`variant-${id}`} type="radio" name="check-answer" value={answer.correctValue} required onClick={handleClick} />
            <label htmlFor={`variant-${id}`}><span>{answer.value}</span></label>
          </p>
          // <>
          //   <p className="variant-A">
          //     <input id="variant-A" type="radio" name="check-answer" value={answer.correctValue} required onClick={handleClick} />
          //     <label htmlFor="variant-A"><span>{answer.first}</span></label>
          //   </p>
          //   <p className="variant-B">
          //     <input id="variant-B" type="radio" name="check-answer" value={answer.correctValue} required onClick={handleClick} />
          //     <label htmlFor="variant-B"><span>{answer.second}</span></label>
          //   </p>
          //   <p className="variant-C">
          //     <input id="variant-C" type="radio" name="check-answer" value={answer.correctValue} required onClick={handleClick} />
          //     <label htmlFor="variant-C"><span>{answer.third}</span></label>
          //   </p>
          //   <p className="variant-D">
          //     <input id="variant-D" type="radio" name="check-answer" value={answer.correctValue} required onClick={handleClick} />
          //     <label htmlFor="variant-D"><span>{answer.fourth}</span></label>
          //   </p>
          // </>
        ))
      }
      <button type="submit">Далее</button>
    </form>

  </div>
);

export default ListQuestion;
