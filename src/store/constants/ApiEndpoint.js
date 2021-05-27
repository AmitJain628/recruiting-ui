const API_KEY = process.env.REACT_APP_API_KEY || '';

export default {
  BOOKS: {
    FETCH_BOOKS: {
      url: list =>
        `https://api.nytimes.com/svc/books/v3/lists/${list}.json?api-key=${API_KEY}`,
      METHOD: 'GET',
    },
    LIST_BOOKs: {
      url: `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`,
      METHOD: 'GET',
    },
  },
};
