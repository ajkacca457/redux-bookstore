import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { categories } from '../data/appdata';
import { createBook } from '../actions';

const data = {
  title: '',
  category: categories[0],
};

const BooksForm = props => {
  const [state, setState] = useState(data);
  const { title, category } = state;

  const handleChange = e => {
    const { value } = e.target;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { title, category } = state;
    const { createBook } = props;
    if (title === '' || category === '') {
      alert('please enter proper information');
    } else {
      createBook({
        id: uuidv4(),
        title,
        category,
      });
      setState({
        title: '',
        category: categories[0],
      });
    }
  };

  return (
    <div className="booksform">
      <h3>Add New Book</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formgroup">
          <span>Book Name: </span>
          {' '}
          <br />
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleChange}
            placeholder="enter book name"
          />
        </div>
        <div className="formgroup">
          <span>Book Category: </span>
          <br />
          <select
            name="category"
            id="category"
            value={category}
            onChange={handleChange}
          >
            {categories.map(category => (
              <option key={`book-category-${category}`} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
