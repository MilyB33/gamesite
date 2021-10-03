import PropTypes from 'prop-types';
import { Grid, Header } from './Game.styles';
import HeaderInfo from './HeaderInfo';
import GameInfo from './GameInfo';
import Screenshots from './Screenshots';
import Video from './Video';
import GamesCollections from './GamesCollections';
import { About } from './Game.styles';

const Game = ({ gameData }) => {
  console.log(gameData);
  const {
    name,
    rating,
    follows,
    age_rating,
    screenshots,
    summary,
    similar_games,
    collection: { games: collection_games },
  } = gameData;
  return (
    <Grid>
      <Header>
        <h1>{name}</h1>
        <div>
          <HeaderInfo text="Rating" value={rating} />
          <HeaderInfo text="Follows" value={follows} />
          <HeaderInfo text="Age Rating" value={age_rating[0].name} />
        </div>
      </Header>
      <Screenshots screenshots={screenshots} />
      <About>
        <h2>About</h2>
        <p>{summary}</p>
      </About>
      <GameInfo game={gameData} />
      <Video video={screenshots[0]} />
      <GamesCollections games={similar_games} type="Similar games" />
      <GamesCollections
        games={collection_games}
        type="Games from collection"
        isWide
      />
    </Grid>
  );
};

Game.propTypes = {
  gameData: PropTypes.instanceOf(Object).isRequired,
};

export default Game;
