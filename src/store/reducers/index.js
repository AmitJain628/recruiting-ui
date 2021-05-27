import { actionConstants } from '../constants';
import initialState from '../state';

function getBookIndex(books, bookId) {
  return books.findIndex(({ id }) => id === bookId);
}

function getBooks(books) {
  return books.map(book => {
    return {
      id: book.primary_isbn13,
      title: book.title,
      image_url: book.book_image,
      description: book.description,
      author: book.author,
      weeksOnList: book.weeks_on_list,
      rank: book.rank,
      primaryIsbn13: book.primary_isbn13,
    };
  });
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionConstants.BOOKS_LOADED:
      return { ...state, books: getBooks(action.books) };
    case actionConstants.BOOKS_ADDED:
      return {
        ...state,
        saved: [...state.saved, action.book],
      };
    case actionConstants.BOOKS_SAVED_LIST:
      return {
        ...state,
        saved: [...state.saved, action.book],
      };
    case actionConstants.BOOKS_REMOVED: {
      const indexToRemove = getBookIndex(state.saved, action.book.id);
      state.saved.splice(indexToRemove, 1);
      return state;
    }
    default:
      return state;
  }
}
