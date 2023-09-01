import React from 'react';

const Book = () => (
  <div className="list-container">
    <ul className="list-block">
      <div className="left-section">
        <li className="category">Category</li>
        <li className="book-title">Book Title</li>
        <li className="book-author">Author</li>

        <nav className="list-actions">
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </nav>
      </div>

      <div className="right-section">
        <div className="progess">
          <span className="progress-indicator">Progress Indicator</span>
          <span className="progress-percent">64%</span>
          <span className="progress-completed">Completed</span>
        </div>

        <div className="chapter">
          <h4 className="current-chapter">CURRENT CHAPTER</h4>
          <h4 className="current-number">CURRENT 17</h4>
          <button type="button" className="update-progress">UPDATE PROGRESS</button>
        </div>
      </div>
    </ul>
  </div>
);

export default Book;
