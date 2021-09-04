import React from 'react';
import styled from 'styled-components';
import { getColor, getMedias } from '../../styles/utils';
import ArticleCard from './ArticleCard';

const ArticlesWrapper = styled.main`
  display: grid;
  grid-auto-rows: 500px;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
  min-height: 100vh;
  padding: 5em 18em;
  background: ${getColor('clr-light-100')};

  @media (max-width: ${getMedias('1400')}) {
    padding: 5em 10em;
  }

  @media (max-width: ${getMedias('desktop')}) {
    padding: 5em;
  }

  @media (max-width: ${getMedias('laptop')}) {
    padding: 3em;
    gap: 3em;
    grid-template-columns: 1fr;
  }

  @media (max-width: ${getMedias('mobile')}) {
    padding: 1em;
    gap: 2.5em;
    grid-auto-rows: 300px;
  }
`;

const Articles = ({ articleCards }) => {
  const renderCards = () =>
    articleCards.map((card, index) => (
      <ArticleCard card={card} key={index} />
    ));

  return <ArticlesWrapper>{renderCards()}</ArticlesWrapper>;
};

export default Articles;
