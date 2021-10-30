import PropTypes from 'prop-types';
import { useReducer, createContext, useCallback } from 'react';
import filterReducer from '../reducers/FIlterReducer';
import IGDBClient from '../api/IGDBClient';

import { flattenGamesData } from '../utlis/filter';

const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, {
    platformID: 6,
    data: [],
    filteredData: [],
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

  const setDefaultFilter = useCallback((platform) => {
    const platformID = platform ? parseInt(platform) : 6;

    dispatch({ type: 'POPULARITY_ASC' });

    dispatch({
      type: 'PLATFORM',
      payload: platformID,
    });
  }, []);

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

  const setData = useCallback(
    (data) => {
      if (state.data.length > 0) return;

      dispatch({ type: 'SET_DATA', payload: data });
    },
    [state.data]
  );

  return (
    <GamesContext.Provider
      value={{
        state,
        sortGames,
        filterByPlatform,
        setDefaultFilter,
        filterByName,
        loadMore,
        setData,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};

GamesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default GamesContext;
