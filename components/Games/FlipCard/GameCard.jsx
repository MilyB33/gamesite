import PropTypes from 'prop-types';
import CardFront from './CardFront';
import CardBack from './CardBack';
import { FlipCardInner, Card } from './Common';

const GameCard = ({ game }) => {
  const { platforms, genres, cover, name, slug, first_release_date } =
    game;

  return (
    <Card>
      <FlipCardInner>
        <CardFront name={name} cover={cover} />

        <CardBack
          platforms={platforms}
          genres={genres}
          slug={slug}
          release_date={first_release_date}
        />
      </FlipCardInner>
    </Card>
  );
};

GameCard.propTypes = {
  game: PropTypes.instanceOf(Object).isRequired,
};

export default GameCard;
