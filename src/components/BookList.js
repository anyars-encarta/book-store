import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import Book from './Book';

const BookList = () => {
  const booksObject = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // Convert the object of arrays into a single flat array
  const booksArray = booksObject.books.flatMap((books) => books);

  return (
    <div>
      {booksArray.map((book) => (
        <div key={book.item_id}>
          <Book book={book} id={book.item_id} />
        </div>
      ))}
    </div>
  );
};

export default BookList;
