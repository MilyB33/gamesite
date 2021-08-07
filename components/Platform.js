import React from 'react';

const Platform = ({ platform }) => {
  console.log(platform);
  return <div>{platform.slug}</div>;
};

export default Platform;
