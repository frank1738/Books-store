const link =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/LgexpQUlS3E2XixayQbC/books/';

// REDUCER

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'load':
      const list = action.playload;
      for (const item in list) {
        const book = {
          item_id: item,
          title: list[item][0].title,
          author: list[item][0].author,
          category: list[item][0].category,
        };
        state.push(book);
      }
      return state;
    case 'add':
      return state.concat(action.playload);
    case 'remove':
      return state.filter((book) => book.item_id !== action.playload);
    default:
      return state;
  }
};

// ACTIONS

export const fetchBooks = () => async (dispatch) => {
  const response = await fetch(link);
  const data = await response.json();
  dispatch({ type: 'load', playload: data });
};

export const addBook = (book) => async (dispatch) => {
  const response = await fetch(link, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'content-type': 'application/json',
    },
  });
  dispatch({ type: 'add', playload: book });
};

export const removeBook = (id) => async (dispatch) => {
  const response = await fetch(link + id, {
    method: 'DELETE',
  });
  dispatch({ type: 'remove', playload: id });
};

export default reducer;
