import { v4 as uuidv4 } from 'uuid';

export const catagories = ['Action', 'Biography', 'History',
  'Horror', 'Kids', 'Learning', 'Sci-Fi'];

export const books = [
  {
    id: uuidv4(),
    title: 'Guns, Germs, and Steel',
    category: 'History',
  },
  {
    id: uuidv4(),
    title: 'Ready Player Two: A Novel',
    category: 'Action',
  },
  {
    id: uuidv4(),
    title: 'The History of the Ancient World',
    category: 'History',
  },
  {
    id: uuidv4(),
    title: 'A Promised Land',
    category: 'Biography',
  },
  {
    id: uuidv4(),
    title: 'The Hobbit',
    category: 'Kids',
  },
];
