import React from 'react';
import { books } from '../data/appdata';
import Book from '../components/Book';

const datatableStyle = {
  backgroundColor: 'white',
  textAlign: 'center',
  padding: '10px',
  width: '60%',
  margin: '5% auto',
};

const BooksList = () => {
  console.log(books);
  return (
    <div className="BooksList">
      <table className="datatable" style={datatableStyle}>
        <thead>
          <tr style={{ backgroundColor: '#707070', color: 'white' }}>
            <th>Book Id</th>
            <th>Book Title</th>
            <th>Book Category</th>
          </tr>
        </thead>
        <tbody>
          {books.map(item => (
            <Book key={item.id} book={item} />))}
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
