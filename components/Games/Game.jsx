import PropTypes from 'prop-types';
import Navigation from './Navigation';
import GameInfo from './GameInfo';

const Game = ({ gameData }) => {
  return (
    <>
      <Navigation />
      <GameInfo gameData={gameData} />
    </>
  );
};

Game.propTypes = {
  gameData: PropTypes.instanceOf(Object).isRequired,
};

export default Game;
