import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    // Dispatch the removeBookAsync action with the book's item_id
    dispatch(removeBookAsync(book.item_id));
  };

  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Ensure that book properties are defined before accessing them
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
            <button type="button" onClick={handleRemoveClick}>Remove</button>
            <button type="button">Edit</button>
          </nav>
        </div>

        <div className="right-section">
          <div className="progess">
            <span className="progress-indicator">Progress Indicator</span>
            <span className="progress-percent">
              {/* Display '0%' if progress is missing */}
              {book.progress || '0%'}
              {' '}
            </span>
            <span className="progress-completed">Completed</span>
          </div>

          <div className="chapter">
            <h4 className="current-chapter">CURRENT CHAPTER</h4>
            <h4 className="current-number">
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
