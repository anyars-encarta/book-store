import React from 'react';

function AddBook() {
  return (
    <div className="Book-container">
      <h2>ADD NEW BOOK</h2>
      <form>
        {/* <label htmlFor="book">Book Title</label> */}
        <input id="book" className="book" required placeholder="Book Title" />
        {/* <label htmlFor="author">Author</label> */}
        <input id="author" className="author" required placeholder="Author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBook;
