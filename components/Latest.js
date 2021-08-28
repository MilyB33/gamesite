import styled from 'styled-components';
import LatestArticle from './LatestArticle';

const Section = styled.section`
  min-height: 80vh;
  text-align: center;
`;

const Articles = styled.div`
  display: flex;
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
      <Articles></Articles>
    </Section>
  );
}

export default Latest;
