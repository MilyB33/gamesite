import PropTypes from 'prop-types';
import React from 'react';
import Navigation from '../Navigation';
import Footer from '../Footer';
import Head from 'next/head';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Main>
        <Navigation />
        {children}
        <Footer />
      </Main>
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
