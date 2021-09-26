import { useEffect, useReducer, useState } from 'react';

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
            (platform) => platform.id == action.payload
          )
        ),
      };
    default:
      return state;
  }
};

const useFilter = (data) => {
  const [state, dispatch] = useReducer(reducer, {
    data,
    filteredData: data.slice(5, 20),
  });

  const sortGames = (event) => {
    dispatch({ type: event.target.value });
  };

  const filterByPlatform = (event) => {
    console.log(event.target.value);
    dispatch({
      type: 'PLATFORM',
      payload: event.target.value,
    });
  };

  return { state, sortGames, filterByPlatform };
};

export default useFilter;
