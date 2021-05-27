import React from 'react';
import PropTypes from 'prop-types';

import { SaveButton } from '../Atom/Buttons';
import {
  Anchor,
  Author,
  Description,
  Title,
  Wrapper,
  Cover,
  Details,
} from './style';

export default function Book({ book, onSave, onRemove, saved, view }) {
  return (
    <Wrapper view={view}>
      <Cover>
        <Anchor to={`/books/${book.id}`}>
          <img src={book.image_url} alt={book.title} />
        </Anchor>
      </Cover>
      <Details>
        <Title>
          <Anchor to={`/books/${book.id}`}>{book.title.toLowerCase()}</Anchor>
        </Title>
        <Author>{book.author}</Author>
        {view === 'list' && <Description>{book.description}</Description>}
        <SaveButton
          onSave={onSave}
          onRemove={onRemove}
          saved={saved}
          book={book}
        />
      </Details>
    </Wrapper>
  );
}

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string),
  saved: PropTypes.bool,
  onSave: PropTypes.func,
  onRemove: PropTypes.func,
  view: PropTypes.string,
};
