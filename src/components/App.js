import '../App.css';
import { useState, useEffect } from 'react';
import Bookshelf from './Bookshelf';
import SearchBooks from './SearchBooks';
import { getAll, update } from '../BooksAPI';
import OpenSearch from './OpenSearch';

function App() {
  const shelfs = [
    { title: 'Currently Reading', status: 'currentlyReading' },
    { title: 'Want to Read', status: 'wantToRead' },
    { title: 'Read', status: 'read' },
  ];
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const res = await getAll();
    setBooks(res);
  };

  useEffect(() => {
    getBooks();
  }, []);
  console.log(books);

  const changeShelf = async (book, shelf) => {
    await update(book, shelf);
    getBooks();
  };

  /**
   * this function toggles between the home page and search page
   */
  const showCloseSearch = () => {
    setShowSearchpage((prevShow) => !prevShow);
  };

  return (
    <div className='app'>
      {showSearchPage ? (
        <SearchBooks closeSearch={showCloseSearch} changeShelf={changeShelf} />
      ) : (
        <div className='list-books'>
          <div className='list-books-title'>
            <h1>MyReads</h1>
          </div>
          <div className='list-books-content'>
            <div>
              {shelfs.map((shelf) => (
                <Bookshelf
                  key={shelf.title}
                  bookshelfTitle={shelf.title}
                  books={books.filter((book) => shelf.status === book.shelf)}
                  changeShelf={changeShelf}
                />
              ))}
            </div>
          </div>
          <OpenSearch openSearch={showCloseSearch} />
        </div>
      )}
    </div>
  );
}

export default App;
