import _ from 'lodash';

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
          message: action.payload.message,
        },
      };
    case 'CLEAR_FIELDS':
      return {
        ..._.mapValues(state, (field) => ({
          ...field,
          value: '',
          valid: false,
          message: '',
        })),
      };
    default:
      state;
  }
};

export default formReducer;
