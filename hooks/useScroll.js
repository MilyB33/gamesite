import { useEffect, useState } from 'react';

const useScroll = () => {
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

  return { isVisible, handleScroll };
};

export default useScroll;
