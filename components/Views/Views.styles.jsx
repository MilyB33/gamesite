import styled from 'styled-components';
import {
  getColor,
  getMedias,
  getAnimation,
} from '../../styles/utils';

const GamesPageWrapper = styled.main`
  background: ${getColor('clr-dark-200')};
  padding-top: 5rem;

  & > h2 {
    text-shadow: -2px -2px 0 ${getColor('clr-purple-100')};
    text-align: center;
  }
`;

const GameGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 2rem clamp(2rem, 5vw, 20rem);
  gap: 3rem 10rem;

  @media (max-width: 1600px) {
    margin: 2rem 1rem;
  }

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1400px) {
    gap: 3rem 2rem;
  }
`;

const ContactWrapper = styled.main`
  display: grid;
  gap: 5rem;
  padding: 5rem 0;

  & > h2 {
    margin: 0 auto;
    text-shadow: -2px -2px 0 rgb(199 60 221);
    text-align: center;
  }
`;

const Section404 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${getColor('clr-dark-100')};
  text-align: center;

  & h3 {
    color: ${getColor('clr-glitch-100')};
    text-shadow: 1px 1px 4px ${getColor('clr-glitch-200')};
  }

  & > header {
    min-height: 400px;
    position: relative;

    @media (max-width: ${getMedias('mobile')}) {
      min-height: 200px;
    }
  }

  & > header > h1 {
    font-size: 30em;
    color: ${getColor('clr-dark-100')};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;

    @media (max-width: ${getMedias('laptop')}) {
      font-size: 20rem;
    }

    @media (max-width: ${getMedias('mobile')}) {
      font-size: 10rem;
    }

    &::after,
    &::before {
      content: '404';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: 0.8;
    }

    &::after {
      color: ${getColor('clr-glitch-200')};
      z-index: -2;
      left: 0;
      animation: ${getAnimation('glitch')} 4s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
    }

    &::before {
      color: ${getColor('clr-glitch-100')};
      z-index: -1;
      animation: ${getAnimation('glitch')} 4s
        cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
    }
  }
`;

const StyledLink = styled.h3`
  padding: 0.5em;
  border-radius: 50px;
  border: 2px solid ${getColor('clr-glitch-100')};
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 0px 16px 4px ${getColor('clr-glitch-200')};
  }
`;

export {
  GamesPageWrapper,
  GameGrid,
  ContactWrapper,
  Section404,
  StyledLink,
};
