import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div className="App">
    <h1 style={{ color: 'white', textAlign: 'center' }}>Bookstore</h1>
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
