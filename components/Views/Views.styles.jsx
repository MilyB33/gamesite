import styled from 'styled-components';
import { getColor, getMedias } from '../../styles/utils';

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
  padding: 5rem 0;
  background: ${getColor('clr-dark-200')};
`;

export { GamesPageWrapper, GameGrid, ContactWrapper };
