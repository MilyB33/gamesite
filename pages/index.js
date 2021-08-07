import Layout from '../components/Layout';
import getPlatforms from '../api/basic';
import Header from '../components/HeaderMain';
import Platforms from '../components/Platforms';

export default function Home({ platforms }) {
  return (
    <main>
      <Header />
      <Platforms platforms={platforms} />
    </main>
  );
}

export async function getStaticProps(context) {
  const res = await getPlatforms.post(
    'platforms',
    'fields name,slug; sort id; where id = (5,6,7,11,34);'
  );

  const { data } = res;

  return {
    props: {
      platforms: data,
    },
  };
}

Home.getLayout = function displayLayout(page) {
  return <Layout>{page}</Layout>;
};
