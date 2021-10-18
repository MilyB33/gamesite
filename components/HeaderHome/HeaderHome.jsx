import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled, { keyframes } from 'styled-components';
import { getColor } from '../../styles/utils';

const bounce = keyframes`
  from{
    top: 0%;
  }

  to {
    top: 20%;
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
  transition: 0.3s;

  &:hover {
    transform: translate(-4px, 4px);
    box-shadow: 0px 0px 0px 0px ${getColor('clr-light-100')};
  }

  & > h2 {
    position: relative;
    animation: ${bounce} 0.8s linear infinite alternate;
  }
`;

const HeaderMain = () => (
  <Header>
    <h1>Game On!</h1>

    <Button href="#Platforms">
      <h2>
        <FontAwesomeIcon icon={faLongArrowAltDown} />
      </h2>
    </Button>
  </Header>
);

export default HeaderMain;
