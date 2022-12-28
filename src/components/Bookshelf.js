import Book from './Book';
import BookList from './BookList';

const Bookshelf = ({ bookshelfTitle, books }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{bookshelfTitle}</h2>
      <div className='bookshelf-books'>
        <BookList books={books} />
      </div>
    </div>
  );
};

export default Bookshelf;
