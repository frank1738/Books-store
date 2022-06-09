import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/book';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Form() {
  const library = useSelector((state) => state.library);
  const id = library.length + 1;
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const book = {
    item_id: id,
    title: title,
    author: author,
    category: 'Fiction',
  };
  return (
    <div className="form-section">
      <h3 className="form-header">ADD NEW BOOK</h3>
      <form>
        <input
          type="text"
          placeholder="Book title"
          className="title-input input"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          className="author-input input"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button
          type="submit"
          className="submit-btn"
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
            document.querySelector('.title-input').value = '';
            document.querySelector('.author-input').value = '';
          }}
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default Form;
