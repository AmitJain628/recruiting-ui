import { apiEndpoint } from '../constants';

export const getBooksService = async list => {
  const resp = await fetch(apiEndpoint.BOOKS.FETCH_BOOKS.url(list));

  const result = await resp.json();

  return result;
};

export const getBooksListService = async () => {
  const resp = await fetch(apiEndpoint.BOOKS.LIST_BOOKs.url);

  const result = await resp.json();

  return result;
};
