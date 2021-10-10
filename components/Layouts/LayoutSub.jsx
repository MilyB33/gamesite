import PropTypes from 'prop-types';
import React from 'react';
import Header from '../subPages/Header';
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

LayoutSub.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default LayoutSub;
