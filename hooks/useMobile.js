import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

const useMobile = (mediaQuery, defaultValue) => {
  const router = useRouter();
  const [isMobileDisplayed, setIsMobileDisplayed] =
    useState(defaultValue);

  const handleChange = (event) => {
    if (event.matches) setIsMobileDisplayed(false);
  };

  const changeOnClick = (value) => {
    if (typeof value !== 'boolean') return;

    setIsMobileDisplayed(value);
  };

  const closeMobileMenu = useCallback(() => {
    setIsMobileDisplayed(false);
  }, []);

  const openMobileMenu = () => {
    setIsMobileDisplayed(true);
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', closeMobileMenu);
    const media = window.matchMedia(`(min-width: ${mediaQuery}px)`);

    if (media.matches) setIsMobileDisplayed(false);

    media.addEventListener('change', handleChange);

    return () => {
      media.removeEventListener('change', handleChange);
      router.events.off('routeChangeComplete', closeMobileMenu);
    };
  }, [mediaQuery, router.events, closeMobileMenu]);

  return {
    isMobileDisplayed,
    changeOnClick,
    closeMobileMenu,
    openMobileMenu,
  };
};

export default useMobile;
