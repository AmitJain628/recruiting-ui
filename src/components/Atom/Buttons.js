import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Icon from './Icon';

export const Button = styled.button`
  border: 1px solid #d6216b;
  border-radius: 20px;
  background: #fff;
  color: #d6216b;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 150px;
  height: 40px;
  ${Icon} {
    font-size: 0.75em;
    margin-top: 1px;
    margin-right: 8px;
  }
`;

const TextButton = styled.button`
  border: none;
  background: none;
  color: #1eb5c4;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Icon} {
    font-size: 0.75em;
    margin-top: 1px;
    margin-right: 8px;
  }
`;

export const SaveButton = ({ book, saved, onSave, onRemove, className }) => {
  const [state, setState] = useState(saved);

  const handleSave = () => {
    onSave(book);
    setState(true);
  };

  const handleRemove = () => {
    onRemove(book.id);
    setState(false);
  };

  return state ? (
    <TextButton className={className} onClick={handleRemove}>
      <Icon icon="check" /> Saved to List
    </TextButton>
  ) : (
    <Button className={className} onClick={handleSave}>
      <Icon icon="plus" /> Save to list
    </Button>
  );
};

SaveButton.propTypes = {
  book: PropTypes.objectOf(PropTypes.string),
  saved: PropTypes.bool,
  onSave: PropTypes.func,
  onRemove: PropTypes.func,
  className: PropTypes.string,
};
