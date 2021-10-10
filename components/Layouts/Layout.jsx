import PropTypes from 'prop-types';
import React from 'react';
import Navigation from '../navigation/Navigation';
import Footer from '../Footer';
import Head from 'next/head';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Navigation />
        {children}
        <Footer />
      </main>
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Layout;
