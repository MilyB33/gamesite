import PropTypes from 'prop-types';
import GameCard from './GridCard';
import ListCard from './ListCard/ListCard';
import Filters from './Filters';
import useFilter from '../../hooks/useFilter';
import { useState } from 'react';
import { GamesWrapper, MoreButton } from './Games.styles';
import SkeletonGridCard from './GridCard/SkeletonGridCard';
import SkeletonListCard from './ListCard/SkeletonListCard';

const Games = ({ games, platforms }) => {
  const [isList, setIsList] = useState(false);

  const {
    state: {
      filteredData: filteredGames,
      infiniteLoad: { loading },
    },
    sortGames,
    filterByPlatform,
    filterByName,
    loadMore,
  } = useFilter(games, platforms);

  const renderSkeleton = () => {
    const skeletonElements = [];

    for (let i = 0; i < 10; i++)
      skeletonElements[i] = isList ? (
        <SkeletonListCard key={i} />
      ) : (
        <SkeletonGridCard key={i} />
      );

    return skeletonElements;
  };

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
        {loading && renderSkeleton()}
      </GamesWrapper>

      <MoreButton onClick={loadMore}>
        {loading ? 'Loading' : 'More'}
      </MoreButton>
    </>
  );
};

Games.propTypes = {
  games: PropTypes.instanceOf(Array).isRequired,
  platforms: PropTypes.instanceOf(Array).isRequired,
};

export default Games;
