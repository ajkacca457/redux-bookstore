import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const datatableStyle = {
  backgroundColor: 'white',
  textAlign: 'center',
  padding: '10px',
  width: '60%',
  margin: '2% auto',
};

const BooksList = props => {
  const {
    books, removeBook, filter, changeFilter,
  } = props;

  const handleRemoveBook = book => {
    removeBook(book);
  };
  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  return (
    <div className="BooksList">
      <CategoryFilter
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
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
          {books.filter(book => filter === book.category || filter === 'All').map(item => (
            <Book key={item.id} book={item} handleRemoveBook={handleRemoveBook} />))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
