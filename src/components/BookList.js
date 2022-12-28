import Book from './Book';

const BookList = ({ books }) => {
  return (
    <ol className='books-grid'>
      {books.map((book) => (
        <li key={book.id}>
          <Book
            title={book.title}
            authors={book.authors}
            image={book.imageLinks.thumbnail}
          />
        </li>
      ))}
    </ol>
  );
};

export default BookList;
