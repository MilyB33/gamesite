import React from 'react';
import styled from 'styled-components';
import { getColor, getMedias } from '../../styles/utils';

const Card = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 2rem;
  padding: 2rem 0;
  box-shadow: 4px 4px 4px 2px ${getColor('clr-dark-200')};

  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(38, 38, 38, 0.7) 50%
    ),
    url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

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
  return (
    <Card bg={card.mainImage.url}>
      <h5>{card.createDate}</h5>
      <h5>{card.title}</h5>
    </Card>
  );
};

export default ArticleCard;
