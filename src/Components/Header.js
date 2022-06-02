import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to='/'>BOOKS</Link>
      <Link to='/categories'>CATEGORIES</Link>
    </nav>
  );
};

export default Header;