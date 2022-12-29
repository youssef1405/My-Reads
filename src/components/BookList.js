import Book from './Book';

const BookList = ({ books, changeShelf }) => {
  return (
    <ol className='books-grid'>
      {books.map((book) => (
        <li key={book.id}>
          <Book book={book} changeShelf={changeShelf} />
        </li>
      ))}
    </ol>
  );
};

export default BookList;
