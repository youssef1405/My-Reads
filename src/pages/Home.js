import Bookshelf from '../components/Bookshelf';
import OpenSearch from '../components/OpenSearch';

function Home({ shelfs, books, changeShelf, openSearch }) {
  return (
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
      <OpenSearch openSearch={openSearch} />
    </div>
  );
}

export default Home;
