import ShelfChanger from './ShelfChanger';

const Book = ({ title, authors, image }) => {
  return (
    <div className='book'>
      <div className='book-top'>
        <div
          className='book-cover'
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${image}")`,
          }}
        ></div>
        <ShelfChanger />
      </div>
      <div className='book-title'>{title}</div>
      <div className='book-authors'>{authors.join(', ')}</div>
    </div>
  );
};

export default Book;
