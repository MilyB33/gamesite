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
  gap: 5em;
  margin-top: 10em;

  @media (max-width: ${getMedias('desktop')}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media (max-width: ${getMedias('tablet')}) {
    grid-template-columns: 1fr;
  }
`;

const LatestArticleCard = styled.article`
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

export {
  ArticlesWrapper,
  Card,
  LatestSection,
  LatestArticlesWrapper,
  LatestArticleCard,
  Date,
  StyledImage,
  StyledLink,
};
