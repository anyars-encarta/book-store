import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, onRemoveClick }) => {
  const handleRemoveClick = () => {
    onRemoveClick(book.item_id);
  };

  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="list-container">
      <ul className="list-block">
        <div className="left-section">
          <li className="category">{capitalizeFirstLetter(book.category)}</li>
          <li className="book-title">{book.title}</li>
          <li className="book-author">{book.author}</li>

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
              20%
            </span>
            <span className="progress-completed">Completed</span>
          </div>

          <div className="chapter">
            <h4 className="current-chapter">CURRENT CHAPTER</h4>
            <h4 className="current-number">
              CHAPTER 4: UMUOFIA
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
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    // progress: PropTypes.string.isRequired,
    // currentChapter: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
  }).isRequired,
  onRemoveClick: PropTypes.func.isRequired,
};

export default Book;
