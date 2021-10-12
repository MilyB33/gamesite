import PropTypes from 'prop-types';
import Image from 'next/image';
import {
  StyledImageWrapper,
  StyledLink,
  Card,
} from './GridCard.styles';

const GameCard = ({ game }) => {
  const {
    cover: { url, alt },
    slug,
  } = game;

  return (
    <Card>
      <StyledImageWrapper>
        <Image src={url} alt={alt} layout="fill" quality={100} />
      </StyledImageWrapper>

      <h4>{game.name}</h4>

      <StyledLink slug={slug}>More</StyledLink>
    </Card>
  );
};

GameCard.propTypes = {
  game: PropTypes.instanceOf(Object).isRequired,
};

export default GameCard;
