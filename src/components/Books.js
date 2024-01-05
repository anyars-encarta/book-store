import React from 'react';
import BookList from './BookList';
import AddBook from './AddBook';
import '../styles/Main.css';

const Books = () => (
  <div className="body-container">
    <BookList />
    <AddBook />
  </div>
);

export default Books;
