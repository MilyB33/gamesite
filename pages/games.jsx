import React from 'react';
import LayoutSub from '../components/Layouts/LayoutSub';
import IGDBClient from '../api/IGDBClient';
import Games from '../components/Games/Games';
import { flattenGamesData } from '../utlis/filter';

const GamesPage = ({ games, platforms }) => (
  <>
    <Games data={games} platforms={platforms} />
  </>
);

GamesPage.getLayout = function displayLayout(page) {
  return <LayoutSub title="Games">{page}</LayoutSub>;
};

export async function getStaticProps() {
  const res = await IGDBClient.getAllGames();
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
