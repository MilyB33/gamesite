import styled from 'styled-components';
import { getMedias } from '../../styles/utils';
import LatestArticle from './LatestArticle';

const Section = styled.section`
  min-height: 80vh;
  text-align: center;
  padding: 5em 10em;

  @media (max-width: ${getMedias('laptop')}) {
    padding: 5em 4em;
  }

  @media (max-width: ${getMedias('tablet')}) {
    padding: 5em 1em;
  }
`;

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 5em;
  margin-top: 10em;

  @media (max-width: ${getMedias('desktop')}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media (max-width: ${getMedias('tablet')}) {
    grid-template-columns: 1fr;
  }
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
