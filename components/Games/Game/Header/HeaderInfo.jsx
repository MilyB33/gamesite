import PropTypes from 'prop-types';
import { HeaderInfoBox } from './Header.styles';

const HeaderInfo = ({ text, value }) => {
  return (
    <HeaderInfoBox>
      <h4>{value}</h4>
      <p>{text}</p>
    </HeaderInfoBox>
  );
};

HeaderInfo.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
};

export default HeaderInfo;
