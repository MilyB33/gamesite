import PropTypes from 'prop-types';
import { GameGrid } from './Views.styles';
import Header from '../Game/Header';
import GameInfo from '../Game/GameInfo';
import Screenshots from '../Game/Screenshots';
import Video from '../Game/Video';
import GamesCollections from '../Game/GamesCollections';
import About from '../Game/About';

const Game = ({ gameData }) => {
  const {
    name,
    rating,
    follows,
    age_rating,
    screenshots,
    summary,
    similar_games,
    collection,
    videos,
  } = gameData;

  return (
    <GameGrid>
      <Header
        name={name}
        rating={rating}
        follows={follows}
        age_rating={age_rating}
      />
      <Screenshots screenshots={screenshots} />
      <About summary={summary} />
      <GameInfo game={gameData} />
      <Video video={videos} />
      <GamesCollections games={similar_games} type="Similar games" />
      {collection && (
        <GamesCollections
          games={collection.games}
          type="Games from collection"
          isWide
        />
      )}
    </GameGrid>
  );
};

Game.propTypes = {
  gameData: PropTypes.instanceOf(Object).isRequired,
};

export default Game;
