import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../actions';
import * as select from '../select';

const Choose = () => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.queryList.amount);
  const categories = useSelector((state) => state.queryList.category);
  const difficulties = useSelector((state) => state.queryList.difficulty);
  const types = useSelector((state) => state.queryList.type);
  const values = useSelector((state) => state.queryList);
  const loadingState = useSelector((state) => state.questions.UIState);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.getQuestions(values));
  };
  const handleChangeSelectAmount = (e) => {
    dispatch(actions.userChooseAmount(e.target.value));
  };
  const handleChangeSelectCategory = (e) => {
    dispatch(actions.userChooseCategory(e.target.value));
  };
  const handleChangeSelectDifficult = (e) => {
    dispatch(actions.userChooseDifficult(e.target.value));
  };
  const handleChangeSelectType = (e) => {
    dispatch(actions.userChooseType(e.target.value));
  };
  return (
    <div className="choose-container-component">
      <form onSubmit={handleSubmit}>
        <input type="number" min="1" max="50" onChange={handleChangeSelectAmount} value={amount} />
        <select name="trivia_difficulty" onChange={handleChangeSelectDifficult} value={difficulties}>
          {
            select.difficulties.map((difficult) => (
              <option value={difficult.value} key={difficult.key}>{difficult.name}</option>
            ))
          }
        </select>
        <select name="trivia_category" onChange={handleChangeSelectCategory} value={categories}>
          {
            select.categories.map((category) => (
              <option value={category.value} key={category.value}>{category.name}</option>
            ))
          }
        </select>
        <select onChange={handleChangeSelectType} value={types}>
          {
            select.types.map((type) => (
              <option value={type.value} key={type.value}>{type.name}</option>
            ))
          }
        </select>
        <button type="submit" disabled={loadingState === 'request'}>{loadingState === 'request' ? 'Подождите...' : 'Начать игру'}</button>
      </form>
    </div>
  );
};

export default Choose;
