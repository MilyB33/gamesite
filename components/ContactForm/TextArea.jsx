import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import { getColor, getMedias } from '../../styles/utils';

const Label = styled.label`
  width: clamp(10rem, 15vw, 40rem);
  grid-row: span 3;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  @media (max-width: ${getMedias('tablet')}) {
    grid-row: 3;
    min-height: 300px;
  }
`;

const Textarea = styled.textarea`
  padding: 2.5rem 1rem;
  cursor: auto;
  height: 100%;
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
  const [toolTipText, setToolTipText] = useState('');
  const [isValid, setIsValid] = useState(true);

  const onChangeValue = (event) => {
    setInputValue(event.target.value);

    const info = validate(event);

    setToolTipText(info.message);
    setIsValid(info.valid);
  };

  return (
    <Label htmlFor={id}>
      <p>{text}</p>

      <Textarea
        id={id}
        name={id}
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
