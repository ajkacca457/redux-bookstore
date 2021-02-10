import React from 'react';
import PropTypes from 'prop-types';

const btnStyle = {
  backgroundColor: 'red',
  color: 'white',
  padding: '5px 10px',
  border: 'none',
  borderRadius: '5px',
};

const Book = props => {
  const { book, handleRemoveBook } = props;
  return (
    <>
      <tr>
        <td>{book.id.substring(-1, 3)}</td>
        <td>{book.title}</td>
        <td>{book.category}</td>
        <td><button type="button" style={btnStyle} onClick={() => handleRemoveBook(book)}>remove</button></td>
      </tr>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
