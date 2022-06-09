import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="nav">
    <h1 className="header">Bookstore CMS</h1>
    <Link to="/" className="link">
      BOOKS
    </Link>
    <Link to="/categories" className="link category-link">
      CATEGORIES
    </Link>
    <div className="profile">
      <i class="uil uil-user user-icon"></i>
    </div>
  </nav>
);

export default Header;
