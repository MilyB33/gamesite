import React from 'react';
import Navigation from './navigation/Navigation';
import Footer from './Footer';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
