import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../../styles/utils';
import SixthCard from './SixthCard/SixthCard';
import Filters from './Filters';

const Wrapper = styled.main`
  background: ${getColor('clr-dark-200')};
  padding-top: 5rem;

  & > h2 {
    text-shadow: -2px -2px 0 ${getColor('clr-purple-100')};
    text-align: center;
  }
`;

const MostPopularWrapper = styled.section`
  display: flex;
  justify-content: center;

  padding: 5rem;
  gap: 5rem;
`;

const FilterWrapper = styled.section`
  display: flex;
  justify-content: center;

  padding: 5rem;
  gap: 5rem;
`;

const Games = ({ data: games }) => {
  const renderMostPopular = () =>
    games
      .slice(0, 5)
      .map((game) => <SixthCard key={game.id} game={game} />);

  return (
    <Wrapper>
      <h2>Most Popular</h2>
      <MostPopularWrapper>{renderMostPopular()}</MostPopularWrapper>
      <FilterWrapper>
        <Filters />
      </FilterWrapper>
    </Wrapper>
  );
};

Games.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default Games;
