import React from 'react';
import { useSelector } from 'react-redux';

const Error = () => {
  const dataError = useSelector((state) => state.questions.UIState);
  const processingError = (errorNum) => {
    switch (errorNum) {
      case 1:
        return <h1>Обнови страницу, выбрери другие значения</h1>;
      case 2:
        return <h1>Перед началом игры, введи правильные аргументы (Например, amount = five)</h1>;
      case 3:
        return <h1>Получи токен, без него никак!</h1>;
      case 4:
        return <h1>Token Empty Session - сбрось полученный токен</h1>;
      default:
        return <h1>Все хорошо, ПРИЯТНОЙ ИГРЫ USERNAME!</h1>;
    }
  };
  return (
    <div className="no-data">
      {
        processingError(dataError)
      }
    </div>
  );
};

export default Error;
