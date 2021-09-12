import React from 'react';
import Navigation from './navigation/Navigation';
import Footer from './Footer/Footer';
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

export default Layout;
