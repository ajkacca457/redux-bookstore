import React from 'react';
import { books } from '../data/appdata';
import Book from '../components/Book';

const BooksList = () => {
  console.log(books);
  return (
    <div className="BooksList">
      <table className="datatable">
        <tr>
          <th>Book Id</th>
          <th>Book Title</th>
          <th>Book Category</th>
        </tr>
        <tbody>
          {books.map(item => (
            <Book key={item.id} book={item} />))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
