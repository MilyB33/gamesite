import _ from 'lodash';
import Layout from '../components/Layout';
import getData from '../api/basic';
import Header from '../components/HeaderMain';
import Platforms from '../components/Platforms';

export default function Home({ data }) {
  return (
    <main>
      <Header />
      <Platforms platforms={data} />
    </main>
  );
}

export async function getStaticProps(context) {
  const platforms = await getData.post(
    'platforms',
    'fields name,slug,platform_logo; sort id; where id = (5,6,7,11,34);'
  );

  const { data } = platforms;
  return {
    props: {
      data,
    },
  };
}

Home.getLayout = function displayLayout(page) {
  return <Layout>{page}</Layout>;
};
