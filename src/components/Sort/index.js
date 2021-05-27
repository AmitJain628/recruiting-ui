import React from 'react';
import PropTypes from 'prop-types';

const Sorter = ({ setSortBy, sortBy }) => (
  <label key="sorter">
    Sort by&nbsp;
    <select onChange={e => setSortBy(e.target.value)} value={sortBy}>
      <option>title</option>
      <option>author</option>
    </select>
  </label>
);

Sorter.propTypes = {
  setSortBy: PropTypes.func,
  sortBy: PropTypes.string,
};

export default Sorter;
