import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = styled.article`
  display: grid;
  grid-auto-rows: min-content;
`;

const GameCard = ({ game }) => {
  console.log(game);
  return <Card></Card>;
};

GameCard.propTypes = {
  game: PropTypes.instanceOf(Object).isRequired,
};

export default GameCard;
