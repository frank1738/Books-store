import { createStore, combineReducers, applyMiddleware } from 'redux';
import bookReducer from './books/book';
import categoryReducer from './categories/categories';
import thunk from 'redux-thunk';

// COMBINE REDUCERS
export const rootReducer = combineReducers({
  library: bookReducer,
  categories: categoryReducer,
});

// STORE

export const store = createStore(rootReducer, applyMiddleware(thunk));

export default rootReducer;
