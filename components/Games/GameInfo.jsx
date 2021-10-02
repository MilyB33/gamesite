import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { getColor } from '../../styles/utils';

const Main = styled.main`
  display: grid;
`;

const GlobalStyles = createGlobalStyle`
    body {
        --backImage:  url(${({ backImage }) => backImage});
        --backGradient: linear-gradient(180deg, rgba(0, 0, 0, 0.53) 0%, rgba(38, 38, 38, 1) 78.83%);
       
        background:  var(--backGradient),var(--backImage),${getColor(
          'clr-dark-400'
        )};   
        background-repeat: no-repeat;
        background-size: 100% 80%;
    }
`;

const GameInfo = ({ gameData }) => {
  console.log(gameData);
  return (
    <>
      <GlobalStyles backImage={gameData.background} />
      <Main></Main>
    </>
  );
};

GameInfo.propTypes = {
  gameData: PropTypes.instanceOf(Object).isRequired,
};

export default GameInfo;
