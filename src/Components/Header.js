import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <Link to="/" className="header">
      BOOKS
    </Link>
    <Link to="/categories">CATEGORIES</Link>
  </nav>
);

export default Header;
