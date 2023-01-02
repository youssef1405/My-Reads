import PropTypes from 'prop-types';

const ShelfChanger = ({ shelf, changeShelf, book }) => {
  const handleChange = (e) => {
    changeShelf(book, e.target.value);
  };
  return (
    <div className='book-shelf-changer'>
      <select onChange={handleChange} value={shelf}>
        <option disabled>Move to...</option>
        <option value='currentlyReading'>Currently Reading</option>
        <option value='wantToRead'>Want to Read</option>
        <option value='read'>Read</option>
        <option value='none'>None</option>
      </select>
    </div>
  );
};

ShelfChanger.propTypes = {
  shelf: PropTypes.string.isRequired,
  changeShelf: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
};

export default ShelfChanger;
