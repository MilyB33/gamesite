import _ from 'lodash';
import Layout from '../components/Layout';
import getData from '../api/basic';
import ContentfulClient from '../api/contentful';
import { homeArticles } from '../utlis/filter';
import Header from '../components/homePage/HeaderMain';
import Platforms from '../components/homePage/Platforms';
import Latest from '../components/homePage/Latest';

export default function Home({ data, articleCards }) {
  console.log(articleCards);
  return (
    <main>
      <Header />
      <Platforms platforms={data} />
      <Latest data={articleCards} />
    </main>
  );
}

export async function getStaticProps(context) {
  const platforms = await getData.post(
    'platforms',
    'fields name,slug,platform_logo; sort id; where id = (5,6,7,11,34);'
  );

  const res = await ContentfulClient.cache.articles;

  const articleCards = homeArticles(res);

  const { data } = platforms;

  return {
    props: {
      data,
      articleCards,
    },
  };
}

Home.getLayout = function displayLayout(page) {
  return <Layout title="Home">{page}</Layout>;
};
