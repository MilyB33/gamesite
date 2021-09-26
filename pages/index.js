import _ from 'lodash';
import Layout from '../components/Layout';
import IGDBClient from '../api/IGDBClient';
import { homeArticles } from '../utlis/filter';
import Header from '../components/homePage/HeaderMain';
import Platforms from '../components/homePage/Platforms';
import Latest from '../components/homePage/Latest';
import ContentfulClient from '../api/contentful';

export default function Home({ platforms, articleCards }) {
  return (
    <>
      <Header />
      <Platforms platforms={platforms} />
      <Latest data={articleCards} />
    </>
  );
}

export async function getStaticProps() {
  const platforms = await IGDBClient.getPlatforms([5, 6, 7, 11, 34]);

  const res = await ContentfulClient.getAllArticlesCards();

  const articleCards = homeArticles(res);

  return {
    props: {
      platforms,
      articleCards,
    },
  };
}

Home.getLayout = function displayLayout(page) {
  return <Layout title="Home">{page}</Layout>;
};
