import React from 'react';

const AddBook = () => (
  <div className="Book-container">
    <h2>ADD NEW BOOK</h2>
    <form>
      <input id="book" className="book" required placeholder="Book Title" />
      <input id="author" className="author" required placeholder="Author" />
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default AddBook;
