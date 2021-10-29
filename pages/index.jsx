import Layout from '../components/Layouts/Layout';
import IGDBClient from '../api/IGDBClient';
import { homeArticles } from '../utlis/filter';
import HomePageView from '../components/Views/HomePageView';
import ContentfulClient from '../api/contentful';

export default function Home({ homePageData }) {
  return (
    <>
      <HomePageView homePageData={homePageData} />
    </>
  );
}

export async function getStaticProps() {
  const platforms = await IGDBClient.getPlatforms([
    8, 167, 48, 9, 46, 12, 49, 169, 6, 34, 41, 534,
  ]);

  console.log(platforms);

  const res = await ContentfulClient.getAllArticlesCards();

  const articleCards = homeArticles(res);

  const homePageData = {
    platforms,
    articleCards,
  };

  return {
    props: {
      homePageData,
    },
  };
}

Home.getLayout = function displayLayout(page) {
  return <Layout title="Home">{page}</Layout>;
};
