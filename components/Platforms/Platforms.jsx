import PropTypes from 'prop-types';
import Platform from './Platform';
import {
  PlatformsSection,
  PlatformsWrapper,
} from './Platforms.styles';

const renderPlatforms = (platforms) =>
  platforms.map((platform) => (
    <Platform platform={platform} key={platform.id} />
  ));

const Platforms = ({ platforms }) => (
  <PlatformsSection id="Platforms">
    <header>
      <h2>Platforms</h2>
    </header>
    <PlatformsWrapper>{renderPlatforms(platforms)}</PlatformsWrapper>
  </PlatformsSection>
);

Platforms.propTypes = {
  platforms: PropTypes.array.isRequired,
};

Platforms.defaultProps = {
  platforms: [],
};

export default Platforms;
