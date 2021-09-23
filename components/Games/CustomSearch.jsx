import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input``;

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
