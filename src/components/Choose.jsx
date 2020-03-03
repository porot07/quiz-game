import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../actions';

const Choose = () => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.queryList.amount);
  const category = useSelector((state) => state.queryList.category);
  const difficulty = useSelector((state) => state.queryList.difficulty);
  const type = useSelector((state) => state.queryList.type);
  const values = useSelector((state) => state.queryList);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.setStateQuestions('result'));
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
        <select name="trivia_difficulty" onChange={handleChangeSelectDifficult} value={difficulty}>
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <select name="trivia_category" onChange={handleChangeSelectCategory} value={category}>
          <option value="">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals &amp; Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science &amp; Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
          <option value="32">Entertainment: Cartoon &amp; Animations</option>
        </select>
        <select onChange={handleChangeSelectType} value={type}>
          <option value="">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True / False</option>
        </select>
        <button type="submit">Начать игру</button>
      </form>
    </div>
  );
};

export default Choose;
