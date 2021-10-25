const filterReducer = (state, action) => {
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
        platformID: action.payload,
        filteredData: state.data.filter((game) =>
          game.platforms.find(
            (platform) => platform.id === action.payload
          )
        ),
      };
    case 'SEARCH':
      return {
        ...state,
        filteredData: state.data
          .filter((game) => game.name.includes(action.payload))
          .filter((game) =>
            game.platforms.find(
              (platform) => platform.id === state.platformID
            )
          ),
      };
    default:
      return state;
  }
};

export default filterReducer;
