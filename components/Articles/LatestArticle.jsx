import Image from 'next/dist/client/image';
import Link from 'next/dist/client/link';
import ArticleButton from '../Button/ArticleButton';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  LatestArticleCard,
  Date,
  StyledImage,
} from './Articles.styles';

const LatestArticle = ({ article }) => {
  return (
    <LatestArticleCard>
      <StyledImage>
        <Image
          src={article.mainImage.url}
          alt={article.mainImage.title}
          layout="fill"
        />
      </StyledImage>
      <Date>{article.createDate}</Date>
      {documentToReactComponents(article.aboutShort)}

      <ArticleButton slug={article.slug}>Read More</ArticleButton>
    </LatestArticleCard>
  );
};

export default LatestArticle;
