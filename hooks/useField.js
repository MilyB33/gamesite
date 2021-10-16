import { useState } from 'react';

const useField = () => {
  const [inputValue, setInputValue] = useState('');
  const [toolTipText, setToolTipText] = useState('');
  const [isValid, setIsValid] = useState(true);

  const onChangeValue = (event) => {
    setInputValue(event.target.value);

    const info = validate(event);

    setToolTipText(info.message);

    setIsValid(info.valid);
  };

  return { inputValue, toolTipText, isValid, onChangeValue };
};

export default useField;
