import React from 'react';
import Header from './subPages/Header';
import Layout from './Layout';

const LayoutSub = ({ children, title }) => {
  return (
    <>
      <Layout title={title}>
        <Header title={title} />
        {children}
      </Layout>
    </>
  );
};

export default LayoutSub;
