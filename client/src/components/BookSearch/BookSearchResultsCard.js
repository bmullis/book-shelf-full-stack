import React from 'react';

import { colors } from '../../theme';
import { shortener } from '../../helpers/shortener';

const BookSearchResultsCard = ({ book }) => {
  const getBookBackground = (book) => {
    if (book.volumeInfo.imageLinks) {
      return `url(${book.volumeInfo.imageLinks.thumbnail})`
    } else {
      return colors.gray400
    };
  };

  return (
    <div 
      className="bookSearchResultsCard"
      key={book.id} 
      style={styles.root} 
    >
      <div style={styles.mediaImage}>
        <div style={{ 
          background: getBookBackground(book),
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          borderRadius: '8px',
          height: '50px',
          width: '50px',
        }}></div>
      </div>
      <div style={styles.content}>
        <div>
          <p style={styles.bookTitle}>{shortener(book.volumeInfo.title, 30)}</p>
          <p style={styles.bookAuthor}>{book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(', ') : book.volumeInfo.authors}</p>
        </div>
        <i style={styles.chevron} className="material-icons">arrow_forward_ios</i>
      </div>
    </div>
  );
};

const styles = {
  root: {
    alignItems: 'center',
    display: 'flex',
    fontSize: '14px',
    height: 'auto',
    justifyContent: 'flex-start',
    padding: '0 10px 0 0',
    width: '100%',
  },
  mediaImage: {
    padding: '20px',
    width: 'auto'
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  bookTitle: {
    fontSize: '1rem',
    color: colors.primary,
    margin: '8px 0'
  },
  bookAuthor: {
    fontSize: '0.8rem',
    color: colors.gray100,
    margin: '8px 0'
  }
}

export default BookSearchResultsCard;