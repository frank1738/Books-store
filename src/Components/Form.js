import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/book';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Form() {
  const library = useSelector((state) => state.library);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const book = {
    name: title,
    author: author,
    id: library.length + 1,
  };
  return (
    <div className="form-section">
      <h3 className="form-header">ADD NEW BOOK</h3>
      <form>
        <input
          type="text"
          placeholder="Book title"
          className="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          className="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (title === '' && author === '') {
              return;
            }
            if (title === '') {
              return;
            }
            if (author === '') {
              return;
            }

            dispatch(addBook(book));
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
