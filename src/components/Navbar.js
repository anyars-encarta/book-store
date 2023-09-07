import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <div className="nav-master">
    <div className="nav-container">
      <nav className="nav-group">
        <h1 className="header-title">Bookstore CMS</h1>
        <ul>
          <li><NavLink className="books" to="/">BOOKS</NavLink></li>
          <li><NavLink className="categories" to="/categories">CATEGORIES</NavLink></li>
        </ul>
      </nav>
      <div className="user" />
    </div>
  </div>
);

export default Navbar;
