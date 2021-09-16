import { useState, useEffect } from 'react';

const useMobile = (mediaQuery, defaultValue) => {
  const [isMobileDisplayed, setIsMobileDisplayed] = useState();

  const setDefaultValue = () => {
    if (typeof value !== 'boolean') return;

    setIsMobileDisplayed(defaultValue);
  };

  const handleChange = (event) => {
    if (event.matches) setIsMobileDisplayed(false);
  };

  const changeOnClick = (value) => {
    if (typeof value !== 'boolean') return;

    setIsMobileDisplayed(value);
  };

  useEffect(() => {
    setDefaultValue();
    const media = window.matchMedia(`(min-width: ${mediaQuery}px)`);

    if (media.matches) setIsMobileDisplayed(false);

    media.addEventListener('change', handleChange);

    return () => {
      media.removeEventListener('change', handleChange);
    };
  }, [mediaQuery]);

  return [isMobileDisplayed, changeOnClick];
};

export default useMobile;
