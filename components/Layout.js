import React from 'react';
import Navigation from './navigation/Navigation';
import Footer from './Footer/Footer';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Head from 'next/head';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Navigation />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
