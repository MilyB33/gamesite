import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../../styles/utils';

const Order = styled.div`
  position: relative;
  border: none;
  border-radius: 10px;
  overflow: hidden;

  & > select {
    padding: 2rem;
    font-size: 2rem;
    background: ${getColor('clr-dark-300')};
    cursor: pointer;
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
    border-top: 14px solid ${getColor('white')};
  }
`;

const CustomSelect = ({ children, name }) => {
  return (
    <Order>
      <select name={name}>{children}</select>
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
