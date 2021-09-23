import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../../styles/utils';

const Icon = styled.div`
  font-size: 3rem;
  padding: 1.5rem;
  cursor: pointer;

  & * {
    transition: 0.3s;
    color: ${getColor('clr-light-300')};
  }

  &:hover * {
    color: ${getColor('clr-light-100')};
  }
`;

const CustomIcon = ({ children }) => {
  return <Icon>{children}</Icon>;
};

CustomIcon.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

export default CustomIcon;
