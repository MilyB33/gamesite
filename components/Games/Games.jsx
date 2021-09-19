import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../../styles/utils';
import GameCard from './FlipCard/GameCard';
import SecondCard from './NormalCard/Card';
import ThirdCard from './ThirdCard/ThirdCard';

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

const Games = ({ data: games }) => {
  console.log(games);
  const renderMostPopular = () =>
    games
      .slice(0, 5)
      .map((game) => <GameCard key={game.id} game={game} />);

  const renderSecond = () =>
    games
      .slice(0, 5)
      .map((game) => <SecondCard key={game.id} game={game} />);

  const renderThird = () =>
    games
      .slice(0, 5)
      .map((game) => <ThirdCard key={game.id} game={game} />);

  return (
    <Wrapper>
      <h2>Most Popular</h2>
      <MostPopularWrapper>{renderMostPopular()}</MostPopularWrapper>
      <h2>Most Popular Second</h2>
      <MostPopularWrapper>{renderSecond()}</MostPopularWrapper>
      <h2>Most Popular Third</h2>
      <MostPopularWrapper>{renderThird()}</MostPopularWrapper>
    </Wrapper>
  );
};

Games.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default Games;
