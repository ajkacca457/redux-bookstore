import { combineReducers } from 'redux';
import books from './book';

const allreducers = combineReducers({
  books,
});

export default allreducers;
