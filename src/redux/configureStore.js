import { createStore, combineReducers } from 'redux';
import bookReducer from './books/book';
import categoryReducer from './categories/categories';

// COMBINE REDUCERS
export const rootReducer = combineReducers({
  library: bookReducer,
  categories: categoryReducer,
});

// STORE

export const store = createStore(rootReducer);

export default rootReducer;
