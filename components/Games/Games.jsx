import PropTypes from 'prop-types';
import GameCard from './GridCard';
import ListCard from './ListCard/ListCard';
import Filters from './Filters';
import useFilter from '../../hooks/useFilter';
import { useState } from 'react';
import { GamesWrapper } from './Games.styles';

const Games = ({ games, platforms }) => {
  const [isList, setIsList] = useState(false);

  const {
    state: { filteredData: filteredGames },
    sortGames,
    filterByPlatform,
    filterByName,
  } = useFilter(games, platforms);

  const renderMostPopular = () =>
    games
      .slice(0, 5)
      .map((game) => <GameCard key={game.id} game={game} />);

  const renderGridGames = () =>
    filteredGames.map((game) => (
      <GameCard key={game.id} game={game} />
    ));

  const renderListGames = () =>
    filteredGames.map((game) => (
      <ListCard key={game.id} game={game} />
    ));

  return (
    <>
      <h2>Most Popular</h2>
      <GamesWrapper>{renderMostPopular()}</GamesWrapper>

      <Filters
        sort={sortGames}
        filter={filterByPlatform}
        search={filterByName}
        platforms={platforms}
        handleView={setIsList}
        isList={isList}
      />

      <GamesWrapper isList={isList}>
        {isList ? renderListGames() : renderGridGames()}
      </GamesWrapper>
    </>
  );
};

Games.propTypes = {
  games: PropTypes.instanceOf(Array).isRequired,
  platforms: PropTypes.instanceOf(Array).isRequired,
};

export default Games;
