import React from 'react';
import PropTypes from 'prop-types';

function BookButton({ children, onClick, className }) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}

BookButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

BookButton.defaultProps = {
  className: '',
};

export default BookButton;
