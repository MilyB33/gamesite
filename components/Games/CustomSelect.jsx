import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../../styles/utils';

const Order = styled.div`
  --clr-default-light: ${getColor('clr-light-300')};
  --clr-default-dark: ${getColor('clr-dark-200')};

  position: relative;
  border: none;
  border-radius: 10px;
  overflow: hidden;

  & > select {
    padding: 2rem 3rem;
    font-size: 2rem;
    background: var(--clr-default-dark);
    cursor: pointer;
    color: var(--clr-default-light);
    transition: 0.3s;
  }

  &::after {
    content: '';
    pointer-events: none;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 14px solid var(--clr-default-light);
    transition: 0.3s;
  }

  &:hover::after,
  &:hover select {
    --clr-default-light: ${getColor('clr-light-100')};
  }
`;

const CustomSelect = ({ children, name, filter }) => {
  const [selectValue, setSelectValue] = useState('');

  const onChange = (event) => {
    setSelectValue(event.target.value);
    filter(event);
  };
  return (
    <Order>
      <select name={name} value={selectValue} onChange={onChange}>
        {children}
      </select>
    </Order>
  );
};

CustomSelect.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  name: PropTypes.string.isRequired,
};

export default CustomSelect;
