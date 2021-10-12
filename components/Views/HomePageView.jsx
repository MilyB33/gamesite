import Header from '../HeaderHome/HeaderHome';
import Platforms from '../Platforms/Platforms';
import Latest from '../Articles/LatestArticles';

const HomePageView = ({ homePageData }) => {
  const { platforms, articleCards } = homePageData;

  return (
    <>
      <Header />
      <Platforms platforms={platforms} />
      <Latest data={articleCards} />
    </>
  );
};

export default HomePageView;
