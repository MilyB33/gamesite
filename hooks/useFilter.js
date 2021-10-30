import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import GamesContext from '../contextProviders/GamesContext';

const useFilter = (data) => {
  const router = useRouter();
  const {
    state,
    sortGames,
    setData,
    setDefaultFilter,
    filterByPlatform,
    filterByName,
    loadMore,
  } = useContext(GamesContext);

  useEffect(() => {
    setDefaultFilter(router.query.platform);
    setData(data);
  }, [setDefaultFilter, setData, data, router.query.platform]);

  return {
    state,
    sortGames,
    filterByPlatform,
    filterByName,
    loadMore,
  };
};

export default useFilter;
