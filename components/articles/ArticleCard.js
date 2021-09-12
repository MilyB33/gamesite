import React from 'react';
import styled from 'styled-components';
import { getMedias } from '../../styles/utils';
import Link from 'next/link';

const Card = styled.section`
  box-shadow: 5px 5px 0px 0px #0a0a0a, 10px 10px 0px 0px #2a2829,
    15px 15px 0px 0px #413d3a, 20px 20px 0px 0px #534e47,
    25px 25px 0px 0px #655e53, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  transition: 0.3s;

  @media (max-width: ${getMedias('laptop')}) {
    box-shadow: 2px 2px 0px 0px #0a0a0a, 6px 6px 0px 0px #2a2829;
  }

  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(38, 38, 38, 0.7) 50%
    ),
    url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    box-shadow: none;
    transform: scale(1.05);
  }

  & > a {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 2rem;
    width: 100%;
    height: 100%;
    padding: 2rem 0;
    transition: 0.3s;
  }

  & :is(h4, h5) {
    padding-inline: 2rem;
  }

  &:first-child,
  &:nth-child(6) {
    grid-column: span 2;
  }

  @media (max-width: ${getMedias('laptop')}) {
    max-width: 100%;

    &:first-child,
    &:nth-child(6) {
      grid-column: 1;
    }
  }
`;

const ArticleCard = ({ card }) => {
  console.log(card);
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
