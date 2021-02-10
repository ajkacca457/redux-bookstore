const createBook = book => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const removeBook = book => ({
  type: 'REMOVE_BOOK',
  payload: book,
});

const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  payload: filter,
});

export { createBook, removeBook, changeFilter };
