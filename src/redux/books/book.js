// REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
    case 'add':
      return state;
    case 'remove':
      return state;
  }
};

// ACTIONS
export const addBook = () => {
  return {
    type: 'add',
  };
};

export const removeBook = () => {
  return {
    type: 'remove',
  };
};

export default reducer;
