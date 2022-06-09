import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/book';

const Book = ({ name, author, id, category }) => {
  const dispatch = useDispatch();
  return (
    <div className="book">
      <div className="description">
        <p className="book-category">{category}</p>
        <h2 className="book-title">{name}</h2>
        <p className="author">{author}</p>
        <div>
          <button className="btn">Comments</button>
          <button
            className="remove-btn btn"
            onClick={() => dispatch(removeBook(id))}
          >
            Remove
          </button>
          <button className="btn edit">Edit</button>
        </div>
      </div>
      <div className="status">
        <div className="bars">
          <div className="larger">
            <div className="box">
              <div>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
              </div>
            </div>
          </div>
          <div className="completed">
            <p className="percentage">75%</p>
            <p className="state">Completed</p>
          </div>
        </div>
        <div className="chapters">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter-number">Chapter 17</p>
          <button className="update-btn">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};
export default Book;
