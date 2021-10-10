import Image from 'next/dist/client/image';
import Link from 'next/dist/client/link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ArticleCard,
  Date,
  StyledImage,
  StyledLink,
} from './HomePage.styles';

const LatestArticle = ({ article }) => {
  return (
    <ArticleCard>
      <StyledImage>
        <Image
          src={article.mainImage.url}
          alt={article.mainImage.title}
          layout="fill"
        />
      </StyledImage>
      <Date>{article.createDate}</Date>
      {documentToReactComponents(article.aboutShort)}
      <Link href={`/posts/${article.slug}`}>
        <StyledLink>
          Read More
          <FontAwesomeIcon icon={faArrowRight} />
        </StyledLink>
      </Link>
    </ArticleCard>
  );
};

export default LatestArticle;
