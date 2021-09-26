import { useEffect, useReducer, useCallback } from 'react';

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
  const [state, dispatch] = useReducer(reducer, {
    data,
    filteredData: data,
  });

  const sortGames = (event) => {
    dispatch({ type: event.target.value });
  };

  const filterByPlatform = (event) => {
    dispatch({
      type: 'PLATFORM',
      payload: parseInt(event.target.value),
    });
  };

  const setDefaultFilter = useCallback(() => {
    dispatch({ type: 'POPULARITY_ASC' });
    dispatch({ type: 'PLATFORM', payload: platforms[0].id });
  }, [platforms]);

  const filterByName = (event) => {
    dispatch({ type: 'SEARCH', payload: event.target.value });
  };

  useEffect(() => {
    setDefaultFilter();
  }, [setDefaultFilter]);

  return { state, sortGames, filterByPlatform, filterByName };
};

export default useFilter;
