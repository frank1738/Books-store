import React from 'react';
import Book from './Book';
import Form from './Form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/book';
import { useState } from 'react';

const Books = () => {
  const dispatch = useDispatch();
  window.addEventListener('load', () => dispatch(fetchBooks()));
  const books = useSelector((state) => state.library);

  return (
    <section className="books-section">
      {books.map((book) => (
        <Book
          key={book.item_id}
          name={book.title}
          author={book.author}
          id={book.item_id}
          category={book.category}
        />
      ))}
      <Form />
    </section>
  );
};

export default Books;
