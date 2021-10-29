import { useEffect, useReducer, useCallback } from 'react';
import { useRouter } from 'next/router';
import filterReducer from '../reducers/FIlterReducer';
import IGDBClient from '../api/IGDBClient';
import { flattenGamesData } from '../utlis/filter';

const useFilter = (data) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(filterReducer, {
    platformID: 6,
    data,
    filteredData: data,
    infiniteLoad: {
      offset: 20,
      limit: 10,
      loading: false,
    },
  });

  const sortGames = (event) => {
    dispatch({ type: event.target.value });
  };

  const filterByPlatform = async (event) => {
    dispatch({
      type: 'PLATFORM',
      payload: parseInt(event.target.value),
    });
  };

  const setDefaultFilter = useCallback(async () => {
    const platformID = router.query.platform
      ? parseInt(router.query.platform)
      : 6;

    dispatch({ type: 'POPULARITY_ASC' });

    dispatch({
      type: 'PLATFORM',
      payload: platformID,
    });
  }, [router]);

  const filterByName = (event) => {
    dispatch({ type: 'SEARCH', payload: event.target.value });
  };

  const loadMore = async () => {
    const {
      platformID,
      infiniteLoad: { offset, limit },
    } = state;

    dispatch({ type: 'SET_LOADING' });

    const data = await IGDBClient.getFilteredGames(
      limit,
      offset,
      platformID
    );

    const games = flattenGamesData(data);

    dispatch({ type: 'ADD_GAMES', payload: games });
  };

  useEffect(() => {
    setDefaultFilter();
  }, [setDefaultFilter]);

  return {
    state,
    sortGames,
    filterByPlatform,
    filterByName,
    loadMore,
  };
};

export default useFilter;
