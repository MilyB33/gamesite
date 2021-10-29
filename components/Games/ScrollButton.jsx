import styled from 'styled-components';
import { getColor } from '../../styles/utils';
import { useEffect, useState } from 'react';

const Button = styled.button`
  position: sticky;
  bottom: 5rem;
  margin: 0 2rem 0 auto;
  z-index: 4;
  cursor: pointer;
  padding: 1.5rem;
  background: ${getColor('clr-dark-100')};

  &:hover > h5 {
    color: ${getColor('clr-glitch-100')};
  }
`;

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', changeVisibility);

    return () => {
      window.removeEventListener('scroll', changeVisibility);
    };
  }, []);

  const changeVisibility = () => {
    if (window.scrollY >= 1000) {
      setIsVisible(true);
      return;
    }

    setIsVisible(false);
  };

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {isVisible && (
        <Button onClick={handleScroll}>
          <h5>Scroll to top</h5>
        </Button>
      )}
    </>
  );
};

export default ScrollButton;
