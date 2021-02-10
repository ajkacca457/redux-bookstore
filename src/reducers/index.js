import { combineReducers } from 'redux';
import books from './book';
import filter from './filter';

const allreducers = combineReducers({
  books,
  filter,
});

export default allreducers;
