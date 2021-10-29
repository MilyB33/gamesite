import styled from 'styled-components';
import { getColor, getMedias } from '../../styles/utils';
import Button from '../Button/Button';

const GamesWrapper = styled.section`
  display: flex;
  flex-direction: ${({ isList }) => (isList ? 'column' : 'initial')};
  flex-wrap: wrap;
  justify-content: center;

  padding: 5rem 4rem;
  gap: 5rem;

  @media (max-width: ${getMedias('mobile')}) {
    padding: 5rem 2rem;
  }
`;

const FilterWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 5rem;
  gap: 5rem;
`;

const MoreButton = styled(Button)`
  position: relative;
  margin: 0 auto 4rem;
  font-size: 1.5rem;
  padding: 1.5rem 3rem;
  border: 2px solid ${getColor('clr-glitch-100')};
  cursor: pointer;
  transition: 0.3s;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 150%;
    transform: translateX(-50%) skew(30deg, 0deg);
    background: ${getColor('clr-glitch-200')};
    height: 100%;
    width: 40%;
    transition: 0.5s;
    z-index: -1;
  }

  &:hover::after {
    left: 50%;
  }
`;

export { GamesWrapper, FilterWrapper, MoreButton };
