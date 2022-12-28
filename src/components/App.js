import '../App.css';
import { useState, useEffect } from 'react';
import Bookshelf from './Bookshelf';
import { getAll } from '../BooksAPI';

function App() {
  const shelfs = ['Currently Reading', 'Want to Read', 'Read'];
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  return (
    <div className='app'>
      {showSearchPage ? (
        <div className='search-books'>
          <div className='search-books-bar'>
            <a
              className='close-search'
              onClick={() => setShowSearchpage(!showSearchPage)}
            >
              Close
            </a>
            <div className='search-books-input-wrapper'>
              <input
                type='text'
                placeholder='Search by title, author, or ISBN'
              />
            </div>
          </div>
          <div className='search-books-results'>
            <ol className='books-grid'></ol>
          </div>
        </div>
      ) : (
        <div className='list-books'>
          <div className='list-books-title'>
            <h1>MyReads</h1>
          </div>
          <div className='list-books-content'>
            <div>
              {shelfs.map((shelf, i) => (
                <Bookshelf key={i} bookshelfTitle={shelf} />
              ))}
            </div>
          </div>
          <div className='open-search'>
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
