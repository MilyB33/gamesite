import styled from 'styled-components';
import Image from 'next/dist/client/image';
import Link from 'next/dist/client/link';
import { getColor } from '../styles/utils';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${getColor('clr-light-100')};
  color: ${getColor('clr-dark-100')};
  box-shadow: -8px 8px 0px 4px ${getColor('clr-additional-200')};

  & p {
    text-align: start;
    color: ${getColor('clr-dark-100')};
    padding-inline: 1.5rem;
    word-spacing: 0.25rem;
    margin-bottom: 1rem;
  }
`;

const Date = styled.p`
  margin: 1.5rem 0;
`;

const StyledImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: max-content;
  font-size: 1.6rem;
  margin: 1rem;
  margin-left: auto;
  margin-top: auto;
  padding: 1rem;
  background: ${getColor('clr-additional-100')};
  cursor: pointer;
  box-shadow: -6px 6px 0px 2px #000000;

  & svg > * {
    fill: black;
  }
`;

const LatestArticle = ({ article }) => {
  return (
    <Card>
      <StyledImage>
        <Image
          src={article.image.url}
          alt={article.image.title}
          layout="fill"
        />
      </StyledImage>
      <Date>{article.createDate}</Date>
      {documentToReactComponents(article.content)}
      <Link href="#">
        <StyledLink>
          Read More
          <FontAwesomeIcon icon={faArrowRight} />
        </StyledLink>
      </Link>
    </Card>
  );
};

export default LatestArticle;
