import { actionConstants } from '../constants';

export const addBook = book => ({
  type: actionConstants.BOOKS_ADDED,
  book,
});

export const removeBook = book => ({
  type: actionConstants.BOOKS_REMOVED,
  book,
});
