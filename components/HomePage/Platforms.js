import styled from 'styled-components';
import PropTypes from 'prop-types';
import Platform from './Platform';
import { getMedias } from '../../styles/utils';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
`;

const PlatformsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
  margin-top: 5em;
  padding: 0 5rem;

  @media (max-width: ${getMedias('tablet')}) {
    gap: 2em;
  }
`;

const renderPlatforms = (platforms) =>
  platforms.map((platform) => (
    <Platform platform={platform} key={platform.id} />
  ));

const Platforms = ({ platforms }) => (
  <Section id="Platforms">
    <header>
      <h2>Platforms</h2>
    </header>
    <PlatformsWrapper>{renderPlatforms(platforms)}</PlatformsWrapper>
  </Section>
);

Platforms.propTypes = {
  platforms: PropTypes.array.isRequired,
};

Platforms.defaultProps = {
  platforms: [],
};

export default Platforms;
