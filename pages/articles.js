import React from 'react';
import Articles from '../components/articles/Articles';
import LayoutSub from '../components/LayoutSub';
import ContentfulClient from '../api/contentful';
import { flattenData } from '../utlis/filter';

const ArticlesPage = ({ articleCards }) => {
  return <Articles articleCards={articleCards} />;
};

ArticlesPage.getLayout = function displayLayout(page) {
  return <LayoutSub title="Articles">{page}</LayoutSub>;
};

export async function getStaticProps(context) {
  const res = await ContentfulClient.getAllArticlesCards();

  const articleCards = flattenData(res);

  return {
    props: {
      articleCards,
    },
  };
}

export default ArticlesPage;
