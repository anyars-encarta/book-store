import React from 'react';
import Book from './Book';

const books = [
  {
    itemId: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
    progress: '84',
  },
  {
    itemId: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
    progress: '28',
  },
  {
    itemId: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
    progress: '5',
  },
];

const BookList = () => (
  <>
    {books.map((book) => (
      <Book key={book.itemId} />
    ))}
  </>
);

export default BookList;
