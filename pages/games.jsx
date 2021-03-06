import React from 'react';
import LayoutSub from '../components/Layouts/LayoutSub';
import IGDBClient from '../api/IGDBClient';
import GamesView from '../components/Views/GamesView';
import { flattenGamesData } from '../utlis/filter';
import { GamesProvider } from '../contextProviders/GamesContext';

const GamesPage = ({ games, platforms }) => (
  <GamesView games={games} platforms={platforms} />
);
GamesPage.getLayout = function displayLayout(page) {
  return <LayoutSub title="Games">{page}</LayoutSub>;
};

export async function getStaticProps() {
  const res = await IGDBClient.getAllGames(19);
  const platforms = await IGDBClient.getPlatforms([
    8, 167, 48, 9, 46, 12, 49, 169, 6, 34, 41, 534,
  ]);

  const games = await flattenGamesData(res);

  return {
    props: {
      games,
      platforms,
    },
  };
}

export default GamesPage;
