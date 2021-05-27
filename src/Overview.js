import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation, useParams } from '@reach/router';
import styled from 'styled-components/macro';

import Page from './components/Page';
import Book from './components/Book';
import Sorter from './components/Sort';
import { getBooksListService } from './store/services';
import { sortBooks } from './utils';

const Shelf = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
`;

export default function Overview({ books, actions, saved }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { listName } = useParams();
  const [, view] = location.search.match(/view=(grid|list)/) || [];
  const [state, setState] = useState('loading');
  const [selected, setSelected] = useState(listName || 'hardcover-fiction');
  const [lists, setLists] = useState([]);
  const [sortBy, setSortBy] = useState('title');

  useEffect(() => {
    const getList = async () => {
      const { results } = await getBooksListService();
      setLists(results);
    };

    getList();
  }, []);

  useEffect(() => {
    setState('loading');
    actions.getBooks(selected).then(() => {
      setState('done');
    });
  }, [actions, selected]);

  const handleChange = e => {
    const { value } = e.target;
    setSelected(value);
    navigate(`/${value}`, { replace: true });
  };

  return (
    <Page
      pageTitle="Discover New Books"
      filters={[
        <select onChange={handleChange} value={selected} key="lists">
          {lists.map(list => (
            <option key={list.list_name_encoded} value={list.list_name_encoded}>
              {list.display_name}
            </option>
          ))}
        </select>,
        <Sorter setSortBy={setSortBy} sortBy={sortBy} />,
      ]}
    >
      {state === 'done' && (
        <Shelf>
          {sortBooks(books, sortBy).map(book => (
            <Book
              view={view}
              book={book}
              actions={actions}
              key={book.id}
              onSave={actions.saveBookFromList}
              onRemove={actions.removeBook}
              saved={saved.some(({ id }) => id === book.id)}
            />
          ))}
        </Shelf>
      )}
    </Page>
  );
}

Overview.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func),
  books: PropTypes.arrayOf(PropTypes.object),
  saved: PropTypes.arrayOf(PropTypes.object),
};
