import { useReducer } from 'react';
import formReducer from '../reducers/formReducer';
import _ from 'lodash';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LETTERS_REGEX = /[^a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g;
const INITIAL_STATE = {
  name: {
    name: 'name',
    value: '',
    valid: false,
    message: '',
  },
  email: {
    name: 'email',
    value: '',
    valid: false,
    message: '',
  },
  message: {
    name: 'message',
    value: '',
    valid: false,
    message: '',
  },
};

const useValidation = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const getValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;

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
        : !EMAIL_REGEX.test(value);
    }

    return value.length > length;
  };

  const validate = (inputName, inputValue) => {
    let inputError = {
      message: '',
      valid: false,
    };

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
      payload: {
        name: inputName,
        value: inputError.valid,
        message: inputError.message,
      },
    });

    return inputError.valid;
  };

  const checkValidity = () => {
    const errors = [];

    _.forIn(state, (entry, key) => {
      errors.push(validate(entry.name, entry.value));
    });

    return errors;
  };

  const clearFields = () => dispatch({ type: 'CLEAR_FIELDS' });

  const onSubmit = (event) => {
    event.preventDefault();

    if (checkValidity().includes(false)) console.log('error');
    else {
      console.log('Data sent');
      // clearFields();
    }
  };

  return { onSubmit, getValue, state };
};

export default useValidation;
