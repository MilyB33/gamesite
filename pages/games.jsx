import React from 'react';
import LayoutSub from '../components/LayoutSub';
import IGDBClient from '../api/IGDBClient';
import Games from '../components/Games/Games';
import { flattenGamesData } from '../utlis/filter';

const GamesPage = ({ games }) => (
  <>
    <Games data={games} />
  </>
);

GamesPage.getLayout = function displayLayout(page) {
  return <LayoutSub title="Games">{page}</LayoutSub>;
};

export async function getStaticProps() {
  const res = await IGDBClient.getAllGames(54);

  const games = await flattenGamesData(res);

  return {
    props: {
      games,
    },
  };
}

export default GamesPage;
