export const sortBooks = (books, sortBy) => {
  return books.sort(({ [sortBy]: a }, { [sortBy]: b }) =>
    a < b ? -1 : a > b ? 1 : 0
  );
};
