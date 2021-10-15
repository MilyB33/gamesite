const formReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return {
        ...state,
        [action.payload.name]: {
          ...state[action.payload.name],
          value: action.payload.value,
        },
      };
    case 'CHANGE_VALIDITY':
      return {
        ...state,
        [action.payload.name]: {
          ...state[action.payload.name],
          valid: action.payload.value,
        },
      };
    default:
      state;
  }
};

export default formReducer;
