import React from 'react';
import { connect } from 'react-redux';

const Results = ({ right, wrong }) => {
  console.log(right, wrong);
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

const mapStateToProps = (state) => ({
  right: state.answers.incRightAnswer,
  wrong: state.answers.decWrongAnswer,
});

export default connect(mapStateToProps)(Results);
