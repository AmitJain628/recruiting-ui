import { actionConstants } from '../constants';
import { getBooksService } from '../services';

export const getBooks = list => async dispatch => {
  try {
    const { results } = await getBooksService(list);
    if (results) {
      dispatch({
        type: actionConstants.BOOKS_LOADED,
        books: results.books,
      });
    }
  } catch {
    // ignore
  }
};

export const saveBookFromList = book => dispatch => {
  dispatch({ type: actionConstants.BOOKS_SAVED_LIST, book });
};
