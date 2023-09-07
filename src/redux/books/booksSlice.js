import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { nanoid } from 'nanoid';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wErNE016NZo5TRPf1UV7/books';

// Async thunk to fetch books
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(URL);

  const booksArray = Object.values(response.data).flatMap((books) => books);

  const booksWithId = booksArray.map((book) => ({
    ...book,
    item_id: nanoid(),
  }));

  return booksWithId;
});

// Async thunk to remove a book
export const removeBookAsync = createAsyncThunk('books/removeBook', async (itemId) => {
  await axios.delete(`${URL}/${itemId}`);
  return itemId;
});

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      // const newItemId = `item${state.length + 1}`;
      const { title, author, category } = action.payload;
      const newItem = {
        item_id: nanoid(),
        title,
        author,
        category,
      };
      state.books.push(newItem);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = action.payload;
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => {
      // Remove the book with the matching item_id from state
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      });
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
