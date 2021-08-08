import styled from 'styled-components';
import PropTypes from 'prop-types';
import Platform from './Platform';

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 60vh;
`;

const Ul = styled.ul`
  display: inherit;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
`;

const renderPlatforms = (platforms) =>
  platforms.map((platform) => (
    <li key={platform.id}>
      <Platform platform={platform} />
    </li>
  ));

const Platforms = ({ platforms }) => (
  <Section id="Platforms">
    <Ul>{renderPlatforms(platforms)}</Ul>
  </Section>
);

Platforms.propTypes = {
  platforms: PropTypes.array.isRequired,
};

Platforms.defaultProps = {
  platforms: [],
};

export default Platforms;
