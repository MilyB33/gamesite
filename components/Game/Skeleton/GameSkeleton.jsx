import styled from 'styled-components';
import { getAnimation, getColor } from '../../../styles/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  height: 90vh;

  & h1 {
    letter-spacing: 0.5rem;
    color: ${getColor('clr-additional-200')};
    text-shadow: -2px -2px 0px ${getColor('clr-glitch-100')},
      4px 2px 0px ${getColor('clr-dark-200')};
  }
`;

const Spinner = styled.h1`
  animation: ${getAnimation('rotateSpinner')} 2s ease-in-out infinite;
`;

const GameSkeleton = () => {
  return (
    <Wrapper>
      <h1>Loading Page</h1>
      <Spinner>
        <FontAwesomeIcon icon={faSpinner} />
      </Spinner>
    </Wrapper>
  );
};

export default GameSkeleton;
