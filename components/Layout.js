import React from 'react';
import Navigation from './navigation/Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
