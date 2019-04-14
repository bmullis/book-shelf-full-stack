import React from 'react';

import { colors } from '../../theme';
import { shortener } from '../../helpers/shortener';

const BookSearchResultsCard = ({ book }) => {
  return (
    <div 
      className="bookSearchResultsCard"
      key={book.id} 
      style={styles.root} 
    >
      <div style={styles.mediaImage}>
        {
          book.volumeInfo.imageLinks && 
          <img 
            style={{ maxWidth: '100%' }}
            src={book.volumeInfo.imageLinks.thumbnail} 
            alt={`Cover of ${book.volumeInfo.title}`} 
          />
        }
      </div>
      <div style={styles.content}>
        <p>Title: {book.volumeInfo.title}</p>
        <p>Authors: {book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(', ') : book.volumeInfo.authors}</p>
        
        <p>Description: {book.volumeInfo.description && shortener(book.volumeInfo.description, 200)}</p>
      </div>
    </div>
  );
};

const styles = {
  root: {
    alignItems: 'center',
    borderLeft: `1px solid ${colors.gray400}`,
    borderRight: `1px solid ${colors.gray400}`,
    borderBottom: `1px solid ${colors.gray400}`,
    display: 'flex',
    fontSize: '14px',
    height: 'auto',
    justifyContent: 'space-around',
    padding: '0 10px 0 0',
    width: '100%',
  },
  mediaImage: {
    width: '7%'
  },
  content: {
    paddingLeft: '20px',
    width: '93%'
  }
}

export default BookSearchResultsCard;