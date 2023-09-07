import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <div className="nav-master">
    <div className="nav-container">
      <h1 className="header-title">Bookstore CMS</h1>
      <nav className="nav-group">
        <ul>
          <li><NavLink className="books" to="/">BOOKS</NavLink></li>
          <li><NavLink className="categories" to="/categories">CATEGORIES</NavLink></li>
        </ul>
      </nav>
    </div>
    <div className="user" />
  </div>
);

export default Navbar;
