import ShelfChanger from './ShelfChanger';

const Book = ({ book, changeShelf }) => {
  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${book.imageLinks.thumbnail}")`,
          }}
        ></div>
        <ShelfChanger
          shelf={book.shelf}
          changeShelf={changeShelf}
          book={book}
        />
      </div>
      <div className='book-title'>{book.title}</div>
      <div className='book-authors'>{book.authors.join(', ')}</div>
    </div>
  );
};

export default Book;
