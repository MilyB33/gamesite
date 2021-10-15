import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import { getColor } from '../../styles/utils';

const Label = styled.label`
  width: clamp(10rem, 15vw, 40rem);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const StyledInput = styled.input`
  padding: 2.5rem 1rem;
  cursor: auto;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 2px 4px,
    rgba(0, 0, 0, 0.5) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.4) 0px -3px 0px inset;

  &::placeholder {
    transition: 0.3s;
  }

  &:hover::placeholder,
  &:focus::placeholder {
    color: ${getColor('clr-light-100')};
  }
`;

const Input = ({ id, placeholder, text, validate }) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeValue = (event) => {
    setInputValue(event.target.value);

    validate(event);
  };

  return (
    <Label htmlFor={id}>
      <p>{text}</p>
      <StyledInput
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChangeValue}
      />
    </Label>
  );
};

Input.defaultProps = {
  placeholder: '',
  validate: () => {},
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  text: PropTypes.string.isRequired,
  validate: PropTypes.func,
};

export default Input;
