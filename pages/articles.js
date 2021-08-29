import React from 'react';
import Head from 'next/head';
import LayoutSub from '../components/LayoutSub';

const ArticlesPage = (props) => {
  console.log(props);
  return <div></div>;
};

ArticlesPage.getLayout = function displayLayout(page) {
  return <LayoutSub title="Articles">{page}</LayoutSub>;
};

export default ArticlesPage;
