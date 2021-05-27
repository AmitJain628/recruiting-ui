import React from 'react';
import PropTypes from 'prop-types';

import { ErrorMessage } from './style';

const Input = ({ name, placeholder, value, handleChange, error }) => (
  <>
    <input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      data-error={error}
    />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </>
);

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  error: PropTypes.string,
};

export default Input;
