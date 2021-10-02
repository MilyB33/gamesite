import PropTypes from 'prop-types';
import { Grid, Header } from './Game.styles';
import HeaderInfo from './HeaderInfo';
import GameInfo from './GameInfo';
import Screenshots from './Screenshots';
import { About } from './Game.styles';

const Game = ({ gameData }) => {
  console.log(gameData);
  const { name, rating, follows, age_rating, screenshots, summary } =
    gameData;
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
    </Grid>
  );
};

Game.propTypes = {
  gameData: PropTypes.instanceOf(Object).isRequired,
};

export default Game;
