import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../../styles/utils';

const Input = styled.input`
  --clr-default-light: ${getColor('clr-light-300')};
  --clr-default-dark: ${getColor('clr-dark-200')};

  font-size: 2rem;
  padding: 2rem;
  min-width: 40%;
  background: var(--clr-default-dark);
  border-radius: 10px;

  &::placeholder {
    color: var(--clr-default-light);
    transition: 0.5s;
  }

  &:focus::placeholder,
  &:hover::placeholder {
    --clr-default-light: ${getColor('clr-light-100')};
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
