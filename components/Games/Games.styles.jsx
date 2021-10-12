import styled from 'styled-components';
import { getMedias } from '../../styles/utils';

const GamesWrapper = styled.section`
  display: flex;
  flex-direction: ${({ isList }) => (isList ? 'column' : 'initial')};
  flex-wrap: wrap;
  justify-content: center;

  padding: 5rem 4rem;
  gap: 5rem;

  @media (max-width: ${getMedias('mobile')}) {
    padding: 5rem 2rem;
  }
`;

const FilterWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 5rem;
  gap: 5rem;
`;

export { GamesWrapper, FilterWrapper };
