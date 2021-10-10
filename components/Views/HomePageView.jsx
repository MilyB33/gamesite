import Header from '../HomePage/HeaderMain';
import Platforms from '../HomePage/Platforms';
import Latest from '../HomePage/Latest';

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
