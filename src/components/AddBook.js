import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [bookInfo, setBookInfo] = useState({ title: '', author: '', category: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookInfo({
      ...bookInfo,
      [name]: value,
    });
  };

  const handleAddBook = () => {
    if (bookInfo.title && bookInfo.author && bookInfo.category) {
      // Dispatch the addBook action with the bookInfo
      dispatch(addBook(bookInfo));

      // Clear the input fields
      setBookInfo({ title: '', author: '', category: '' });
    }
  };

  return (
    <div className="Book-container">
      <h2>ADD NEW BOOK</h2>
      <form>
        <input
          id="title"
          name="title"
          className="book"
          required
          placeholder="Book Title"
          value={bookInfo.title}
          onChange={handleInputChange}
        />
        <input
          id="author"
          name="author"
          className="author"
          required
          placeholder="Author"
          value={bookInfo.author}
          onChange={handleInputChange}
        />
        <select
          id="category"
          name="category"
          className="category"
          required
          value={bookInfo.category}
          onChange={handleInputChange}
        >
          <option value="" disabled>Category</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="fiction">Fiction</option>
          <option value="melodrama">Melodrama</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="novella">Novella</option>
          <option value="sci-fi">SCI-FI</option>
          <option value="slapstick">Slapstick</option>
        </select>

        <button type="submit" onClick={handleAddBook}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;
