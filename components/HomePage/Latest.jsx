import LatestArticle from './LatestArticle';
import { LatestSection, ArticlesWrapper } from './HomePage.styles';

function Latest({ data }) {
  // Index should be changed
  const renderArticles = () =>
    data.map((article, index) => (
      <LatestArticle key={index} article={article} />
    ));

  return (
    <LatestSection>
      <h2>Latest</h2>
      <ArticlesWrapper>{renderArticles()}</ArticlesWrapper>
    </LatestSection>
  );
}

export default Latest;
