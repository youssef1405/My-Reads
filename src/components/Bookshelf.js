import PropTypes from 'prop-types';
import BookList from './BookList';

const Bookshelf = ({ bookshelfTitle, books, changeShelf }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{bookshelfTitle}</h2>
      <div className='bookshelf-books'>
        <BookList books={books} changeShelf={changeShelf} />
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  bookshelfTitle: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  changeShelf: PropTypes.func.isRequired,
};

export default Bookshelf;
