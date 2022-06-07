// REDUCER

const books = [
  { name: 'Enemity', author: 'enrique', id: 1 },
  { name: 'Trigger', author: 'Gregory', id: 2 },
];
const reducer = (state = books, action) => {
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
