import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CardSide } from './Common';
import { getColor } from '../../../styles/utils';
import Link from '../../all/Link';

const FlipBack = styled(CardSide)`
  display: grid;
  padding: 2rem;
  background: ${getColor('clr-dark-300')};
  transform: rotateY(180deg);
  box-shadow: -1px 1px 0px ${getColor('clr-glitch-200')};
`;

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const CardBack = ({ release_date, slug, genres, platforms }) => {
  const renderPlatforms = () =>
    platforms.map((platform) => (
      <p key={platform.id}>{platform.name}</p>
    ));

  const renderGenres = () =>
    genres.map((genre) => <p key={genre.id}>{genre.name}</p>);

  return (
    <FlipBack>
      <h5>Platforms</h5>

      <ListWrapper>{renderPlatforms()}</ListWrapper>

      <h5>Genres</h5>

      <ListWrapper>{renderGenres()}</ListWrapper>

      <h5>Release Date</h5>

      <p>{release_date}</p>

      <Link slug={slug}>More</Link>
    </FlipBack>
  );
};

CardBack.propTypes = {
  release_date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  genres: PropTypes.instanceOf(Array).isRequired,
  platforms: PropTypes.instanceOf(Array).isRequired,
};

export default CardBack;
