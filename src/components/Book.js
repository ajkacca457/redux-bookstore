import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book, handleRemoveBook } = props;
  return (
    <div className="book">

      <div className="bookinfo">
        <p className="School-of">{book.category}</p>
        <p className="title">{book.title}</p>
        <p className="author">Author</p>
        <div className="btndiv">
          <button type="button" style={{ borderRight: '2px solid #e8e8e8' }}>Comments</button>
          <button type="button" onClick={() => handleRemoveBook(book)} style={{ borderRight: '2px solid #e8e8e8' }}>remove</button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="bookprogress">
        <div className="progress-bar">
          <div className="progress-bar-inner" />
        </div>
        <div className="textprogress">
          <h2 className="percent">65%</h2>
          <h5 className="subpercent">Completed</h5>
        </div>
      </div>

      <div className="bookchapter">
        <p className="Current-Chapter">Current Chapter</p>
        <p className="Current-Lesson">Chapter 20</p>
        <button type="button" className="updatebtn"> UPDATE PROGRESS</button>
      </div>

    </div>
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
