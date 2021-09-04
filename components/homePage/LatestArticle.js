import styled from 'styled-components';
import Image from 'next/dist/client/image';
import Link from 'next/dist/client/link';
import { getColor } from '../../styles/utils';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 15px;
  box-shadow: -8px 8px 0px 4px ${getColor('clr-additional-200')};
  background: ${getColor('clr-light-100')};
  overflow: hidden;
  transition: 0.5s;

  & p {
    text-align: start;
    margin-bottom: 1rem;
    color: ${getColor('clr-dark-100')};
    word-spacing: 0.25rem;
    padding-inline: 2rem;
  }
`;

const Date = styled.p`
  margin: 1.5rem 0;
`;

const StyledImage = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1.5 / 1;
`;

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: max-content;
  margin: 1rem;
  margin-left: auto;
  margin-top: auto;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  box-shadow: -6px 6px 0px 2px ${getColor('clr-dark-100')};
  background: ${getColor('clr-additional-200')};
  font-size: 1.6rem;
  transition: 0.3s;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: -4px 4px 0px 2px ${getColor('clr-dark-200')};
  }

  & svg > * {
    fill: black;
  }
`;

const LatestArticle = ({ article }) => {
  return (
    <Card>
      <StyledImage>
        <Image
          src={article.mainImage.url}
          alt={article.mainImage.title}
          layout="fill"
        />
      </StyledImage>
      <Date>{article.createDate}</Date>
      {documentToReactComponents(article.aboutShort)}
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
