import React, { Fragment } from 'react';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <h1>Layout 1</h1>
      {children}
    </Fragment>
  );
};

export default Layout;
