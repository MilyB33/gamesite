import React from 'react';
import styled from 'styled-components';
import { getColor } from '../../styles/utils';
import ArticleCard from './ArticleCard';

const ArticlesWrapper = styled.main`
  display: grid;
  grid-template-rows: repeat(3, 500px);
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
  min-height: 100vh;
  padding: 5em 18rem;
  background: ${getColor('clr-light-100')};
`;

const Articles = ({ articleCards }) => {
  const renderCards = () =>
    articleCards.map((card, index) => (
      <ArticleCard card={card} key={index} />
    ));

  return <ArticlesWrapper>{renderCards()}</ArticlesWrapper>;
};

export default Articles;
