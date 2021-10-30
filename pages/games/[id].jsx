import IGDBClient from '../../api/IGDBClient';
import {
  flattenGamesData,
  flattenGameData,
} from '../../utlis/filter';
import GameView from '../../components/Views/GameView';
import GameLayout from '../../components/Layouts/GameLayout';
import GameSkeleton from '../../components/Game/Skeleton/GameSkeleton';
import { useRouter } from 'next/router';

const GamePage = ({ game }) => {
  const router = useRouter();

  return (
    <>
      {router.isFallback ? (
        <GameSkeleton />
      ) : (
        <GameView gameData={game} />
      )}
    </>
  );
};

export async function getStaticPaths() {
  const res = await IGDBClient.getAllGames(19);

  const flattened = flattenGamesData(res);

  const paths = flattened.map((game) => ({
    params: { id: game.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await IGDBClient.getExactGame(params.id);

  const game = flattenGameData(res);

  return { props: { game } };
}

GamePage.getLayout = function displayLayout(page, pageProps) {
  const name = pageProps?.game?.name ?? 'Loading';
  const background = pageProps?.game?.background ?? null;

  return (
    <GameLayout title={name} background={background}>
      {page}
    </GameLayout>
  );
};

export default GamePage;
