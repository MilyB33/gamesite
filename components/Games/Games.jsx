import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getColor } from '../../styles/utils';

const Wrapper = styled.main`
  background: ${getColor('clr-dark-200')};

  & > h2 {
    text-shadow: -2px -2px 0 ${getColor('clr-purple-100')};
    text-align: center;
  }
`;

const Games = ({ games }) => {
  return (
    <Wrapper>
      <h2>Most Popular</h2>
    </Wrapper>
  );
};

Games.propTypes = {
  games: PropTypes.instanceOf(Object).isRequired,
};

export default Games;
