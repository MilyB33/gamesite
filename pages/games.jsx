import React from 'react';
import LayoutSub from '../components/LayoutSub';
import IGDBClient from '../api/IGDBClient';
import Games from '../components/Games/Games';

const GamesPage = ({ games }) => {
  return <Games />;
};

GamesPage.getLayout = function displayLayout(page) {
  return <LayoutSub title="Games">{page}</LayoutSub>;
};

export async function getStaticProps() {
  const games = await IGDBClient.getGames();
  return {
    props: {
      games,
    },
  };
}

export default GamesPage;
