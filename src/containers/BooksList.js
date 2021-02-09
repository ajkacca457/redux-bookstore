import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const datatableStyle = {
  backgroundColor: 'white',
  textAlign: 'center',
  padding: '10px',
  width: '60%',
  margin: '2% auto',
};

const BooksList = props => {
  const { books } = props;
  return (
    <div className="BooksList">
      <table className="datatable" style={datatableStyle}>
        <thead>
          <tr style={{ backgroundColor: '#707070', color: 'white' }}>
            <th>Book Id</th>
            <th>Book Title</th>
            <th>Book Category</th>
          </tr>
        </thead>
        <tbody>
          {books.map(item => (
            <Book key={item.id} book={item} />))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
});

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
};

export default connect(mapStateToProps)(BooksList);
