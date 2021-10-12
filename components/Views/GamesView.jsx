import PropTypes from 'prop-types';
import Games from '../Games/Games';
import { GamesPageWrapper } from './Views.styles';

const GamesView = ({ games, platforms }) => {
  return (
    <GamesPageWrapper>
      <Games games={games} platforms={platforms} />
    </GamesPageWrapper>
  );
};

GamesView.propTypes = {
  games: PropTypes.instanceOf(Array).isRequired,
  platforms: PropTypes.instanceOf(Array).isRequired,
};

export default GamesView;
