import { useState, useEffect } from 'react';
import { search } from '../BooksAPI';
import Book from './Book';

const SearchBooks = ({ closeSearch, changeShelf, mainBooks }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');

  const searchBook = async () => {
    try {
      if (query) {
        const books = await search(query);
        console.log(books);
        setSearchResults(books);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchBook();
  }, [query]);

  const getShelf = (book) => {
    let shelf = 'none';
    mainBooks.forEach((b) => {
      if (b.id === book.id) shelf = b.shelf;
    });
    return shelf;
  };

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <a className='close-search' onClick={closeSearch}>
          Close
        </a>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title, author, or ISBN'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {searchResults &&
            Array.isArray(searchResults) &&
            searchResults
              .filter((book) => book.imageLinks !== undefined)
              .map((book) => {
                return (
                  <li key={book.id}>
                    <Book
                      book={book}
                      changeShelf={changeShelf}
                      shelf={getShelf(book)}
                    />
                  </li>
                );
              })}
        </ol>
      </div>
    </div>
  );
};

export default SearchBooks;
