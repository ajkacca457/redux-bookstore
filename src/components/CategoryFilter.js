import React from 'react'
import PropTypes from 'prop-types'
import categories from '../data/appdata'

const Filter = ({ handleFilterChange }) => (
  <select
    id="filter"
    onChange={e => handleFilterChange(e.target.value)}
  >
    {['All', ...categories].map(category => (
      <option key={category} value={category}>
        {category}
      </option>
    ))}
  </select>
)

Filter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
}

export default Filter;
