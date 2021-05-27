import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Atom/Icon';
import Page from '../Page';
import { StyledSaveButton, StyledPage, Detail, Author, Cover } from './style';

const displayBook = (key, value) =>
  value && (
    <Detail>
      <strong>{key}:&nbsp;</strong>
      {value}
    </Detail>
  );

export default function BookDetails({ books, bookId, actions, saved }) {
  let book = saved.find(({ id }) => id === bookId);

  if (books) {
    const fullBook = books.find(({ id }) => id === bookId);

    if (!book && fullBook) {
      book = fullBook;
    } else if (fullBook) {
      book = { ...book, ...fullBook };
    }
  }

  if (!book) {
    return (
      <Page>
        <h2>Book not found!</h2>
      </Page>
    );
  }

  const converImage = book.image_url ? (
    <img src={book.image_url} alt={book.title} />
  ) : (
    <Icon icon="book-open" />
  );

  const {
    title,
    author,
    description,
    publisher,
    primaryIsbn13,
    rank,
    weeksOnList,
  } = book;

  return (
    <StyledPage>
      <div>
        <Cover>{converImage}</Cover>
        <StyledSaveButton
          book={book}
          onSave={actions.saveBookFromList}
          onRemove={actions.removeBook}
          saved={!!book}
        />
      </div>
      <h1>{title.toLowerCase()}</h1>
      <Author>{author}</Author>
      <h2>Description</h2>
      <p>{description}</p>
      <h2>Details</h2>
      {displayBook('Publisher', publisher)}
      {displayBook('ISBN13', primaryIsbn13)}
      {displayBook('Best Sellers Rank', rank)}
      {displayBook('Weeks on Best Sellers List', weeksOnList)}
    </StyledPage>
  );
}

BookDetails.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  bookId: PropTypes.string,
  actions: PropTypes.objectOf(PropTypes.func),
  saved: PropTypes.arrayOf(PropTypes.object),
};
