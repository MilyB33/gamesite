import Button from './Button';
import styled from 'styled-components';
import { getColor } from '../../styles/utils';

const StyledButton = styled(Button)`
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 2px 4px,
    rgba(0, 0, 0, 0.5) 0px 7px 13px -3px,
    rgba(0, 0, 0, 0.4) 0px -3px 0px inset;
  padding: 2rem;
  transition: 0.2s;
  background: ${getColor('clr-light-100')};
  color: ${getColor('clr-dark-100')};

  &:hover {
    color: ${getColor('clr-light-100')};
    background: ${getColor('clr-dark-300')};
  }
`;

export default StyledButton;
