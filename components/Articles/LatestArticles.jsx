import LatestArticle from './LatestArticle';
import {
  LatestSection,
  LatestArticlesWrapper,
} from './Articles.styles';

function Latest({ data }) {
  // Index should be changed
  const renderArticles = () =>
    data.map((article, index) => (
      <LatestArticle key={index} article={article} />
    ));

  return (
    <LatestSection>
      <h2>Latest</h2>
      <LatestArticlesWrapper>
        {renderArticles()}
      </LatestArticlesWrapper>
    </LatestSection>
  );
}

export default Latest;
