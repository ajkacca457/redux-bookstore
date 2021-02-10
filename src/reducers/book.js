const books = (state = [], action) => {
  const { type } = action;
  switch (type) {
    case 'CREATE_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export default books;
