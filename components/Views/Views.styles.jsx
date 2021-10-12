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

export { GamesPageWrapper };
