import { useEffect, useReducer, useCallback } from 'react';
import IGDBClient from '../api/IGDBClient';
import { flattenGamesData } from '../utlis/filter';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';

const reducer = (state, action) => {
  switch (action.type) {
    case 'POPULARITY_ASC':
      return {
        ...state,
        filteredData: [
          ...state.filteredData.sort((a, b) => a.follows - b.follows),
        ],
      };
    case 'POPULARITY_DESC':
      return {
        ...state,
        filteredData: [
          ...state.filteredData.sort((a, b) => b.follows - a.follows),
        ],
      };
    case 'RATING_ASC':
      return {
        ...state,
        filteredData: [
          ...state.filteredData.sort((a, b) => a.rating - b.rating),
        ],
      };

    case 'RATING_DESC':
      return {
        ...state,
        filteredData: [
          ...state.filteredData.sort((a, b) => b.rating - a.rating),
        ],
      };
    case 'NAME_ASC':
      return {
        ...state,
        filteredData: [
          ...state.filteredData.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          }),
        ],
      };
    case 'NAME_DESC':
      return {
        ...state,
        filteredData: [
          ...state.filteredData.sort((a, b) => {
            if (a.name > b.name) return -1;
            if (a.name < b.name) return 1;
            return 0;
          }),
        ],
      };
    case 'PLATFORM':
      return {
        ...state,
        filteredData: state.data.filter((game) =>
          game.platforms.find(
            (platform) => platform.id === action.payload
          )
        ),
      };
    case 'SEARCH':
      return {
        ...state,
        filteredData: state.data.filter((game) =>
          game.name.includes(action.payload)
        ),
      };
    default:
      return state;
  }
};

const useFilter = (data, platforms) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, {
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
    // This will be changed later to in navigation links
    const platformID = router.query.platform
      ? parseInt(router.query.platform)
      : 6;

    console.log(platformID);
    dispatch({ type: 'POPULARITY_ASC' });

    dispatch({
      type: 'PLATFORM',
      payload: platformID,
    });
  }, [router]);

  const filterByName = (event) => {
    dispatch({ type: 'SEARCH', payload: event.target.value });
  };

  useEffect(() => {
    setDefaultFilter();
  }, [setDefaultFilter]);

  return { state, sortGames, filterByPlatform, filterByName };
};

export default useFilter;
