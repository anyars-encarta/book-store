import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="nav-container">
    <h1 className="header-title">Bookstore CMS</h1>
    <nav>
      <ul>
        <li><NavLink className="books" to="/">BOOKS</NavLink></li>
        <li><NavLink className="categories" to="/categories">CATEGORIES</NavLink></li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
