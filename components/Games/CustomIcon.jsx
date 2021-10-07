import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../../styles/utils';

const Icon = styled.div`
  font-size: 3rem;
  padding: 1.5rem;
  cursor: pointer;

  & * {
    transition: 0.3s;
    color: ${({ isList }) =>
      isList ? getColor('clr-light-100') : getColor('clr-light-300')};
  }

  &:hover * {
    color: ${getColor('clr-light-100')};
  }
`;

const CustomIcon = ({ children, changeView, isList }) => {
  return (
    <Icon onClick={changeView} isList={isList}>
      {children}
    </Icon>
  );
};

CustomIcon.defaultProps = {
  changeView: () => {},
  isList: false,
};

CustomIcon.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  changeView: PropTypes.func,
  isList: PropTypes.bool,
};

export default CustomIcon;
