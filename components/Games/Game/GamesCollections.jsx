import PropTypes from 'prop-types';
import { GamesCollectionsWrapper } from './Game.styles';

const GamesCollections = ({ type, games, isWide }) => {
  const renderGames = () =>
    games.map((game) => <a key={game.id}>{game.name}</a>);

  return (
    <GamesCollectionsWrapper isWide={isWide}>
      <p>{type}</p>
      <div>{renderGames()}</div>
    </GamesCollectionsWrapper>
  );
};

GamesCollections.defaultProps = {
  isWide: false,
};

GamesCollections.propTypes = {
  type: PropTypes.string.isRequired,
  games: PropTypes.instanceOf(Array).isRequired,
  isWide: PropTypes.bool,
};

export default GamesCollections;
