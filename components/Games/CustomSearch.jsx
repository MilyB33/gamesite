import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../../styles/utils';

const Input = styled.input`
  font-size: 2rem;
  padding: 2rem;
  min-width: 70rem;
  background: ${getColor('clr-dark-300')};
  cursor: pointer;
  border-radius: 10px;

  &::placeholder {
    color: ${getColor('clr-light-300')};
    transition: 0.5s;
  }

  &:focus::placeholder,
  &:hover::placeholder {
    color: ${getColor('clr-light-200')};
  }
`;

const CustomSearch = ({ name, placeholder }) => {
  const [Inputvalue, setInputValue] = useState('');

  const onChangeValue = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Input
      name={name}
      placeholder={placeholder}
      value={Inputvalue}
      onChange={onChangeValue}
      autocomplete="off"
    />
  );
};

CustomSearch.defaultProps = {
  placeholder: '',
};

CustomSearch.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default CustomSearch;
