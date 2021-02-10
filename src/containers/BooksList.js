import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook } from '../actions';

const datatableStyle = {
  backgroundColor: 'white',
  textAlign: 'center',
  padding: '10px',
  width: '60%',
  margin: '2% auto',
};

const BooksList = props => {
  const { books, removeBook } = props;
  const handleRemoveBook = book => {
    removeBook(book);
  };

  return (
    <div className="BooksList">
      <table className="datatable" style={datatableStyle}>
        <thead>
          <tr style={{ backgroundColor: '#707070', color: 'white' }}>
            <th>Book Id</th>
            <th>Book Title</th>
            <th>Book Category</th>
            <th>Event</th>
          </tr>
        </thead>
        <tbody>
          {books.map(item => (
            <Book key={item.id} book={item} handleRemoveBook={handleRemoveBook} />))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
