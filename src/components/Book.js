import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/booksSlice';
import '../styles/Book.css';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 85) {
        setProgress((prevProgress) => prevProgress + 1);
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  const handleRemoveClick = () => {
    // Dispatch the removeBookAsync action with the book's item_id
    dispatch(removeBookAsync(book.item_id));
  };

  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Ensure that book properties are defined before accessing them, the
  const category = book.category ? book.category : 'Unknown Category';
  const title = book.title ? book.title : 'No Title';
  const author = book.author ? book.author : 'Unknown Author';

  return (
    <div className="list-container">
      <ul className="list-block">
        <div className="left-section">
          <li className="category">{capitalizeFirstLetter(category)}</li>
          <li className="book-title">{title}</li>
          <li className="book-author">{author}</li>

          <nav className="list-actions">
            <button type="button">Comments</button>
            <span>|</span>
            <button type="button" onClick={handleRemoveClick}>Remove</button>
            <span>|</span>
            <button type="button">Edit</button>
          </nav>
        </div>

        <div className="right-section">
          <div className="progess-container">
            <div className="progress-sign">
              <span className="title timer" data-from="0" data-to="85" data-speed="1800" />
              <div className="overlay" />
              <div className="left" />
              <div className="right" />
            </div>
            <div className="progress">
              <span className="progress-percent">
                {/* Display '0%' if progress is missing */}
                {/* {book.progress || '90%'}
                {' '} */}
                {progress}
              </span>
              <span className="progress-completed">Completed</span>
            </div>
          </div>
          <span className="div" />
          <div className="chapter">
            <h4 className="current-chapter">CURRENT CHAPTER</h4>
            <h4 className="chapter-number">
              {/* Display 'No Chapter' if chapter is missing */}
              {book.currentChapter || 'No Chapter'}
              {' '}
            </h4>
            <button type="button" className="update-progress">UPDATE PROGRESS</button>
          </div>
        </div>
      </ul>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    category: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    progress: PropTypes.string,
    currentChapter: PropTypes.string,
    item_id: PropTypes.string,
  }).isRequired,
};

export default Book;
