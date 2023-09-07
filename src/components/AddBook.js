import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { addBook, fetchBooks } from '../redux/books/booksSlice';
import '../styles/AddBook.css';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wErNE016NZo5TRPf1UV7/books';

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

  const handleAddBook = async () => {
    if (bookInfo.title && bookInfo.author && bookInfo.category) {
      // Generate a temporary 'item_id'
      const tempItemId = nanoid();

      try {
        const { title, author, category } = bookInfo;
        const response = await axios.post(URL, {
          item_id: tempItemId, title, author, category,
        });
        // Dispatch the addBook action with the bookInfo
        dispatch(addBook(response.data));

        // Clear the input fields
        setBookInfo({ title: '', author: '', category: '' });
        dispatch(fetchBooks());
      } catch (error) {
        throw new Error('Error adding book:', error.response ? error.response.data : error.message);
      }
    }
  };

  return (
    <div className="book-container">
      <hr />
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={(e) => e.preventDefault()}>
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
