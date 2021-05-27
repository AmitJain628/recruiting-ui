import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { useNavigate, useLocation } from '@reach/router';

import { Button } from '../Atom/Buttons';
import Icon from '../Atom/Icon';
import Page from '../Page';
import Book from '../Book';
import Sorter from '../Sort';
import { sortBooks } from '../../utils';

const Shelf = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  width: 1080px;
  margin: 0 auto;
`;

export default function Bookshelf({ books, actions, saved }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [, view] = location.search.match(/view=(grid|list)/) || [];
  const [sortBy, setSortBy] = useState('title');

  return (
    <Page
      pageTitle="Your Saved Books"
      filters={[
        <Button onClick={() => navigate('/books/new')} key="add-new">
          <Icon icon="plus" /> Add new book
        </Button>,
        <Sorter setSortBy={setSortBy} sortBy={sortBy} />,
      ]}
    >
      <Shelf>
        {sortBooks(books, sortBy).map(book => (
          <Book
            view={view}
            book={book}
            actions={actions}
            key={book.id}
            onSave={actions.addBook}
            onRemove={actions.removeBook}
            saved={saved.some(({ id }) => id === book.id)}
          />
        ))}
      </Shelf>
    </Page>
  );
}

Bookshelf.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.objectOf(PropTypes.func),
  saved: PropTypes.arrayOf(PropTypes.object),
};
