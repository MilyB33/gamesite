import styled from 'styled-components';
import { getColor } from '../../../styles/utils';

const Header = styled.header`
  @media (max-width: 1400px) {
    grid-column: span 2;
  }

  @media (max-width: 650px) {
    text-align: center;
  }

  h1 {
    margin-top: 0;
  }

  & > div {
    display: flex;
  }
`;

const HeaderInfoBox = styled.div`
  text-align: center;
  padding: 2rem 5rem;

  @media (max-width: 650px) {
    padding: 2rem;
    margin-inline: auto;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
  }

  & + & {
    border-left: 0.3rem solid ${getColor('clr-additional-300')};
  }

  & > p {
    color: ${getColor('clr-dark-500')};
  }
`;

export { Header, HeaderInfoBox };
