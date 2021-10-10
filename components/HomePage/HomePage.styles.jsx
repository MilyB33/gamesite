import styled, { keyframes } from 'styled-components';
import { getColor, getMedias } from '../../styles/utils';

const bounce = keyframes`
  from{
    top: 0%;
  }

  to {
    top: 20%;
  }
`;

const PlatformCard = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  transition: 0.3s;
  cursor: pointer;

  & * {
    text-align: center;
    color: ${getColor('clr-additional-100')};
  }

  & a {
    width: 100%;
    padding: 2em;

    @media (max-width: ${getMedias('tablet')}) {
      padding: 2em 1.5em;
    }

    @media (max-width: ${getMedias('mobile')}) {
      margin: 0 4em;
    }
  }

  background: ${getColor('clr-dark-300')};
  gap: 2em;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${getMedias('tablet')}) {
    width: 45%;
    gap: 0;
  }

  @media (max-width: ${getMedias('mobile')}) {
    width: 100%;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 100vw;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(38, 38, 38, 0.7) 50%,
      ${getColor('clr-dark-400')} 100%
    ),
    url('/static/background1.png');
  background-repeat: no-repeat;
  text-shadow: -4px 4px 0px ${getColor('clr-purple-100')};
`;

const Button = styled.a`
  display: grid;
  place-content: center;
  width: 15rem;
  aspect-ratio: 1;
  background: ${getColor('clr-additional-100')};
  box-shadow: -8px 8px 0px 4px ${getColor('clr-light-100')};
  border: 4px solid ${getColor('clr-purple-100')};
  transition: 0.3s;

  &:hover {
    box-shadow: -4px 4px 0px 2px ${getColor('clr-light-100')};
  }

  & > h2 {
    position: relative;
    animation: ${bounce} 0.8s linear infinite alternate;
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

const ArticlesWrapper = styled.div`
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

const ArticleCard = styled.article`
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

const PlatformsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
`;

const PlatformsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
  margin-top: 5em;
  padding: 0 5rem;

  @media (max-width: ${getMedias('tablet')}) {
    gap: 2em;
  }
`;

export {
  PlatformCard,
  Header,
  Button,
  LatestSection,
  ArticlesWrapper,
  ArticleCard,
  Date,
  StyledImage,
  StyledLink,
  PlatformsSection,
  PlatformsWrapper,
};
