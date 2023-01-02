import '../App.css';
import { useState, useEffect } from 'react';
import { getAll, update } from '../BooksAPI';
import Home from '../pages/Home';
import Search from '../pages/Search';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const res = await getAll();
    setBooks(res);
  };

  useEffect(() => {
    getBooks();
  }, []);

  const changeShelf = async (book, shelf) => {
    await update(book, shelf);
    getBooks();
  };

  return (
    <div className='app'>
      <Routes>
        <Route
          path='/'
          element={<Home books={books} changeShelf={changeShelf} />}
        />
        <Route
          path='/search'
          element={<Search changeShelf={changeShelf} mainBooks={books} />}
        />
      </Routes>
    </div>
  );
}

export default App;
