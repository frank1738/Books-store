import React from 'react';
import Book from './Book';
import Form from './Form';

const Books = () => {
  return (
    <section className='books-section'>
      <Book />
      <Book />
      <Book />
      <Form />
    </section>
  );
};

export default Books;
