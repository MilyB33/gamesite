import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../../styles/utils';
import SixthCard from './SixthCard/SixthCard';
import Filters from './Filters';
import useFilter from '../../hooks/useFilter';

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
  flex-wrap: wrap;
  justify-content: center;

  padding: 5rem 4rem;
  gap: 5rem;
`;

const FilterWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 5rem;
  gap: 5rem;
`;

const Games = ({ data: games, platforms }) => {
  console.log(games);

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

  const renderGames = () =>
    filteredGames.map((game) => (
      <SixthCard key={game.id} game={game} />
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
        />
      </FilterWrapper>

      <GamesWrapper>{renderGames()}</GamesWrapper>
    </Wrapper>
  );
};

Games.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  platforms: PropTypes.instanceOf(Array).isRequired,
};

export default Games;
