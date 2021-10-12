import PropTypes from 'prop-types';
import { About } from './Game.styles';

const AboutSection = ({ summary }) => (
  <About>
    <h2>About</h2>
    <p>{summary}</p>
  </About>
);

AboutSection.propTypes = {
  summary: PropTypes.string.isRequired,
};

export default AboutSection;
