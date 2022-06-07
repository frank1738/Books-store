import React from 'react';
import Book from './Book';
import Form from './Form';
import { useSelector } from 'react-redux';

const Books = () => {
  const books = useSelector((state) => state.library);
  return (
    <section className="books-section">
      {books.map((book) => (
        <Book
          key={book.id}
          name={book.name}
          author={book.author}
          id={book.id}
        />
      ))}
      <Form />
    </section>
  );
};

export default Books;
