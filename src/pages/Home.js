import Bookshelf from '../components/Bookshelf';
import OpenSearch from '../components/OpenSearch';

function Home({ books, changeShelf, openSearch }) {
  const shelfs = [
    { title: 'Currently Reading', status: 'currentlyReading' },
    { title: 'Want to Read', status: 'wantToRead' },
    { title: 'Read', status: 'read' },
  ];
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
