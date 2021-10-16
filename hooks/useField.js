import { useState } from 'react';
import useValidation from './useValidation';

const useField = () => {
  const [inputValue, setInputValue] = useState('');

  const onChangeValue = (event) => {
    setInputValue(event.target.value);

    getValue(event);
  };

  return { inputValue, onChangeValue };
};

export default useField;
