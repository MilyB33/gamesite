import PropTypes from 'prop-types';
import Navigation from '../Games/Navigation';
import Head from 'next/head';
import Background from '../Game/Background';

const GameLayout = ({ children, title, background }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Background alt={title} background={background} />
      <Navigation />
      <main>{children}</main>
    </>
  );
};

GameLayout.propTypes = {
  title: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default GameLayout;
