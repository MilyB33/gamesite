import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../../styles/utils';
import GameCard from './GameCard';

const Wrapper = styled.main`
  background: ${getColor('clr-dark-200')};

  & > h2 {
    text-shadow: -2px -2px 0 ${getColor('clr-purple-100')};
    text-align: center;
  }
`;

const MostPopularWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
`;

const Games = ({ data: games }) => {
  console.log(games);
  const renderMostPopular = () =>
    games
      .slice(0, 5)
      .map((game) => <GameCard key={game.id} game={game} />);

  return (
    <Wrapper>
      <h2>Most Popular</h2>
      <MostPopularWrapper>{renderMostPopular()}</MostPopularWrapper>
    </Wrapper>
  );
};

Games.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default Games;
