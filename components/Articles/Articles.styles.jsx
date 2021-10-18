import styled from 'styled-components';
import { getColor, getMedias } from '../../styles/utils';

const ArticlesWrapper = styled.main`
  display: grid;
  grid-auto-rows: 500px;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
  min-height: 100vh;
  padding: 5em 18em;
  background: ${getColor('clr-dark-200')};

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

const Card = styled.section`
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  transition: 0.3s;

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
    padding: 2rem;
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

const LatestSection = styled.section`
  min-height: 80vh;
  text-align: center;
  padding: 5em 10em;

  & h2 {
    text-shadow: -2px -2px 0 rgb(199 60 221);
  }

  @media (max-width: ${getMedias('laptop')}) {
    padding: 5em 4em;
  }

  @media (max-width: ${getMedias('tablet')}) {
    padding: 5em 1em;
  }
`;

const LatestArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 1vw;
  margin-top: 10rem;

  @media (max-width: ${getMedias('desktop')}) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: initial;
    gap: 3vw 1vw;
  }

  @media (max-width: ${getMedias('tablet')}) {
    padding: 0 2rem;
  }
`;

const LatestArticleCard = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.9) 0px 10px 20px,
    rgba(0, 0, 0, 1) 0px 6px 6px;
  background: ${getColor('clr-light-100')};
  overflow: hidden;
  transition: 0.5s;
  max-width: 75rem;

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

export {
  ArticlesWrapper,
  Card,
  LatestSection,
  LatestArticlesWrapper,
  LatestArticleCard,
  Date,
  StyledImage,
};
