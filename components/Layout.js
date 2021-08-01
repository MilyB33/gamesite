import React, { Fragment } from 'react';
import Navigation from './navigation/Navigation';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navigation />
      {children}
    </Fragment>
  );
};

export default Layout;
