import React from 'react';
import { categories } from '../data/appdata';

const BooksForm = () => (
  <div className="booksform">
    <h3>Add New Book</h3>
    <form className="form">
      <div className="formgroup">
        <span>Book Name: </span>
        {' '}
        <br />
        <input type="text" name="title" id="title" placeholder="enter book name" />
      </div>
      <div className="formgroup">
        <span>Book Category: </span>
        <br />
        <select name="category" id="category">
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
export default BooksForm;
