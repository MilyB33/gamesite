import React from 'react';
import { Card } from './Articles.styles';
import Link from 'next/link';

const ArticleCard = ({ card }) => {
  return (
    <Card bg={card.mainImage.url}>
      <Link href={`posts/${card.slug}`}>
        <a>
          <h5>{card.createDate}</h5>
          <h5>{card.title}</h5>
        </a>
      </Link>
    </Card>
  );
};

export default ArticleCard;
