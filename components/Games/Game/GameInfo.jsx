import PropTypes from 'prop-types';
import InfoWrapper from './InfoWrapper';
import { Info, About } from './Game.styles';
import { arrayToString } from '../../../utlis/filter';

const GameInfo = ({ game }) => {
  const {
    first_release_date,
    genres,
    platforms,
    themes,
    game_modes,
    developer: { name: developerName },
    publisher: { name: publisherName },
  } = game;

  const genresString = arrayToString(genres, ',');
  const platformsString = arrayToString(platforms, ',');
  const themesString = arrayToString(themes, ',');
  const gameModesString = arrayToString(game_modes, ',');

  return (
    <Info>
      <InfoWrapper text="Release date" value={first_release_date} />
      <InfoWrapper text="Genres" value={genresString} />
      <InfoWrapper text="Platforms" value={platformsString} />
      <InfoWrapper text="Developer" value={developerName} />
      <InfoWrapper text="Publisher" value={publisherName} />
      <InfoWrapper text="Themes" value={themesString} />
      <InfoWrapper text="Game modes" value={gameModesString} />
    </Info>
  );
};

GameInfo.propTypes = {
  game: PropTypes.instanceOf(Object),
};

export default GameInfo;
