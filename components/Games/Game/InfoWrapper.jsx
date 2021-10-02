import PropTypes from 'prop-types';
import { InfoBox } from './Game.styles';

const InfoWrapper = ({ text, value }) => {
  return (
    <InfoBox>
      <h5>{text}</h5>
      <p>{value}</p>
    </InfoBox>
  );
};

InfoWrapper.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
};

export default InfoWrapper;
