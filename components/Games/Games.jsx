import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor, getMedias } from '../../styles/utils';
import SixthCard from './SixthCard/SixthCard';
import ListCard from './ListCard/ListCard';
import Filters from './Filters';
import useFilter from '../../hooks/useFilter';
import { useState } from 'react';

const Wrapper = styled.main`
  background: ${getColor('clr-dark-200')};
  padding-top: 5rem;

  & > h2 {
    text-shadow: -2px -2px 0 ${getColor('clr-purple-100')};
    text-align: center;
  }
`;

const GamesWrapper = styled.section`
  display: flex;
  flex-direction: ${({ isList }) => (isList ? 'column' : 'initial')};
  flex-wrap: wrap;
  justify-content: center;

  padding: 5rem 4rem;
  gap: 5rem;

  @media (max-width: ${getMedias('mobile')}) {
    padding: 5rem 2rem;
  }
`;

const FilterWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 5rem;
  gap: 5rem;
`;

const Games = ({ data: games, platforms }) => {
  const [isList, setIsList] = useState(true);

  const {
    state: { filteredData: filteredGames },
    sortGames,
    filterByPlatform,
    filterByName,
  } = useFilter(games, platforms);

  const renderMostPopular = () =>
    games
      .slice(0, 5)
      .map((game) => <SixthCard key={game.id} game={game} />);

  const renderGridGames = () =>
    filteredGames.map((game) => (
      <SixthCard key={game.id} game={game} />
    ));

  const renderListGames = () =>
    filteredGames.map((game) => (
      <ListCard key={game.id} game={game} />
    ));

  return (
    <Wrapper>
      <h2>Most Popular</h2>
      <GamesWrapper>{renderMostPopular()}</GamesWrapper>
      <FilterWrapper>
        <Filters
          sort={sortGames}
          filter={filterByPlatform}
          search={filterByName}
          platforms={platforms}
          handleView={setIsList}
          isList={isList}
        />
      </FilterWrapper>

      <GamesWrapper isList={isList}>
        {isList ? renderListGames() : renderGridGames()}
      </GamesWrapper>
    </Wrapper>
  );
};

Games.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  platforms: PropTypes.instanceOf(Array).isRequired,
};

export default Games;
