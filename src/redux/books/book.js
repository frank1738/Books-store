// REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return state.concat(action.playload);
    case 'remove':
      return state.filter((book) => book.id !== action.playload);
    default:
      return state;
  }
};

// ACTIONS
export const addBook = (book) => {
  return {
    type: 'add',
    playload: book,
  };
};

export const removeBook = (id) => {
  return {
    type: 'remove',
    playload: id,
  };
};

export default reducer;
