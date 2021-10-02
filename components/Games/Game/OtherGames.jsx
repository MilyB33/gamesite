import PropTypes from 'prop-types';

const OtherGames = ({ games }) => {
  return <div></div>;
};

OtherGames.propTypes = {
  games: PropTypes.instanceOf(Array).isRequired,
};

export default OtherGames;
