import IGDBClient from '../../api/IGDBClient';
import {
  flattenGamesData,
  flattenGameData,
} from '../../utlis/filter';
import GameView from '../../components/Views/GameView';
import GameLayout from '../../components/Layouts/GameLayout';

const gamePage = ({ game }) => <GameView gameData={game} />;

export async function getStaticPaths() {
  const res = await IGDBClient.getAllGames(50);

  const flattened = flattenGamesData(res);

  const paths = flattened.map((game) => ({
    params: { id: game.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await IGDBClient.getExactGame(params.id);

  const game = flattenGameData(res);

  return { props: { game } };
}

gamePage.getLayout = function displayLayout(page, pageProps) {
  const {
    game: { background, name },
  } = pageProps;

  return (
    <GameLayout title={name} background={background}>
      {page}
    </GameLayout>
  );
};

export default gamePage;
