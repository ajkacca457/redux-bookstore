import React from 'react';
import PropTypes from 'prop-types';
import { categories } from '../data/appdata';

const Filter = ({ handleFilterChange }) => (
  <div className="panel-bg">

    <div className="left-items">
      <h1 className="Bookstore-CMS">Bookstore CMS</h1>
      <p className="BOOKS">Books</p>
      <p className="CATEGORIES">CATEGORIES</p>
      <select
        id="filter"
        onChange={e => handleFilterChange(e.target.value)}
        style={{ width: '10%' }}
      >
        {['All', ...categories].map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>

    <i className="fas fa-user icon" />

  </div>
);

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
