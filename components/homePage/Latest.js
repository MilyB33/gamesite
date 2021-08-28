import styled from 'styled-components';
import LatestArticle from './LatestArticle';

const Section = styled.section`
  min-height: 80vh;
  text-align: center;
  padding: 5em 10em;
`;

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  gap: 5em;
  margin-top: 10em;
`;

function Latest({ data }) {
  // Index should be changed
  const renderArticles = () =>
    data.map((article, index) => (
      <LatestArticle key={index} article={article} />
    ));

  return (
    <Section>
      <h2>Latest</h2>
      <ArticlesWrapper>{renderArticles()}</ArticlesWrapper>
    </Section>
  );
}

export default Latest;
