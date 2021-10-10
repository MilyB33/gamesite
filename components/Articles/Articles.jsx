import React from 'react';
import { ArticlesWrapper } from './Articles.styles';
import ArticleCard from './ArticleCard';

const Articles = ({ articleCards }) => {
  const renderCards = () =>
    articleCards.map((card, index) => (
      <ArticleCard card={card} key={index} />
    ));

  return <ArticlesWrapper>{renderCards()}</ArticlesWrapper>;
};

export default Articles;
