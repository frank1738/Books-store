import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/book';

const Book = ({ name, author, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="book">
      <h2 className="book-title">{name}</h2>
      <p className="author">{author}</p>
      <button className="remove-btn" onClick={() => dispatch(removeBook(id))}>
        remove
      </button>
    </div>
  );
};
export default Book;
