import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter }) => {
  return (
    <input
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      onChange={filter}
    />
  );
};

Filter.prototype = {
  filter: PropTypes.func.isRequired,
};
export default Filter;
