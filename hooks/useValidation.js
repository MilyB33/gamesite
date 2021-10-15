import { useState, useReducer } from 'react';
import formReducer from '../reducers/formReducer';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LETTERS_REGEX = /[^a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g;
const INITIAL_STATE = {
  name: {
    value: '',
    valid: false,
  },
  email: {
    value: '',
    valid: false,
  },
  message: {
    value: '',
    valid: false,
  },
};

const useValidation = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const [isValidated, setIsValidated] = useState(false);

  const getValue = (name, value) => {
    dispatch({ type: 'CHANGE_VALUE', payload: { name, value } });
  };

  const conditions = (
    name,
    nameValue,
    length,
    value,
    regex = false
  ) => {
    if (name !== nameValue) return false;

    if (regex) {
      return name === 'name'
        ? LETTERS_REGEX.test(value)
        : EMAIL_REGEX.test(value);
    }

    return value.length > length;
  };

  const validate = (input) => {
    let inputError = {
      message: '',
      valid: false,
    };

    const inputName = input.target.name;
    const inputValue = input.target.value;

    getValue(inputName, inputValue);

    switch (true) {
      case inputValue.length < 3:
        inputError.message = 'Please enter minimum 3 characters';
        break;
      case conditions(inputName, 'name', 30, inputValue):
        inputError.message = 'Maksiumum length is 30 characters';
        break;
      case conditions(inputName, 'name', null, inputValue, true):
        inputError.message = 'Please enter only letters';
        break;
      case conditions(inputName, 'email', 50, inputValue):
        inputError.message = 'Maksimum length is 50 letters';
        break;
      case conditions(inputName, 'email', null, inputValue, true):
        inputError.message = 'Please enter valid email address';
        break;
      case conditions(inputName, 'message', 2000, inputValue):
        inputError.message = 'Maksimum length is 2000 letters';
        break;
      default:
        inputError.message = '';
        inputError.valid = true;
    }

    dispatch({
      type: 'CHANGE_VALIDITY',
      payload: { name: inputName, value: inputError.valid },
    });

    return inputError;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    console.log(state);

    if (!isValidated) console.log('error');
  };

  return { isValidated, onSubmit, validate };
};

export default useValidation;
