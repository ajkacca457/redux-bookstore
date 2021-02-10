import React from 'react';
import PropTypes from 'prop-types';
import { categories } from '../data/appdata';

const Filter = ({ handleFilterChange }) => (
  <div className="filtercomp" style={{ textAlign: 'center' }}>
    <h3 style={{
      color: 'white',
      textDecoration: 'underline',
      marginBottom: '5px',
    }}
    >
      Find books by categories:
    </h3>
    <select
      id="filter"
      onChange={e => handleFilterChange(e.target.value)}
      style={{ width: '30%', textAlign: 'right' }}
    >
      {['All', ...categories].map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  </div>
);

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default Filter;
