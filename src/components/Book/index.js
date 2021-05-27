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
  const { id, title, description, author } = book;

  return (
    <Wrapper view={view}>
      <Cover>
        <Anchor to={`/books/${id}`}>
          <img src={book.image_url} alt={title} />
        </Anchor>
      </Cover>
      <Details>
        <Title>
          <Anchor to={`/books/${id}`}>{title.toLowerCase()}</Anchor>
        </Title>
        <Author>{author}</Author>
        {view === 'list' && <Description>{description}</Description>}
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
