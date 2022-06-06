import { createStore } from 'redux';
import { combineReducers } from 'redux';
import bookReducer from './books/book';
import categoryReducer from './categories/categories';

// COMBINE REDUCERS
export const rootReducer = combineReducers({
  book: bookReducer,
  category: categoryReducer,
});

// STORE

export const store = createStore(rootReducer);

export default rootReducer;
