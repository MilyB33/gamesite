import PropTypes from 'prop-types';
import { Card, ImageWrapper, StyledLink } from './ListCard.styles';
import Image from 'next/image';

const ListCard = ({ game }) => {
  const {
    cover: { url, alt },
    slug,
  } = game;

  return (
    <Card>
      <ImageWrapper>
        <Image layout="fill" alt={alt} src={url} />
      </ImageWrapper>

      <h4>{game.name}</h4>

      <StyledLink slug={slug}>More</StyledLink>
    </Card>
  );
};

ListCard.propTypes = {
  game: PropTypes.instanceOf(Object),
};

export default ListCard;
