import { useEffect, useReducer, useCallback } from 'react';
import { useRouter } from 'next/router';
import filterReducer from '../reducers/FIlterReducer';

const useFilter = (data) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(filterReducer, {
    platformID: 6,
    data,
    filteredData: data,
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
    console.log(state);
    dispatch({ type: 'SEARCH', payload: event.target.value });
  };

  useEffect(() => {
    setDefaultFilter();
  }, [setDefaultFilter]);

  return { state, sortGames, filterByPlatform, filterByName };
};

export default useFilter;
