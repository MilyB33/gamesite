import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { keyframes } from 'styled-components';
import { getColor } from '../styles/utils';

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
  background: url('/static/background1.png');
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

export default HeaderMain;
