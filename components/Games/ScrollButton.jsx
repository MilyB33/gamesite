import styled from 'styled-components';
import { getColor } from '../../styles/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import useScroll from '../../hooks/useScroll';

const Button = styled.button`
  position: sticky;
  bottom: 5rem;
  margin: 0 2rem 0 auto;
  z-index: 4;
  cursor: pointer;
  padding: 1.5rem;
  font-size: 5rem;

  &:hover * {
    color: ${getColor('clr-glitch-100')};
  }
`;

const ScrollButton = () => {
  const { isVisible, handleScroll } = useScroll();

  return (
    <>
      {isVisible && (
        <Button onClick={handleScroll}>
          <FontAwesomeIcon icon={faArrowCircleUp} />
        </Button>
      )}
    </>
  );
};

export default ScrollButton;
