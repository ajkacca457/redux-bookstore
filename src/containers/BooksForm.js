import React from 'react';
import { categories } from '../data/appdata';

const BooksForm = () => (
  <div className="booksform">
    <form>
      <label htmlFor="title">
        Title:
        <input type="text" name="title" id="title" />
      </label>
      <label htmlFor="category">
        Category:
        <select name="category" id="category">
          {categories.map(category => (
            <option key={`book-category-${category}`} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" />
    </form>
  </div>
);
export default BooksForm;
