import React from 'react';

import BookSearchResultsCard from './BookSearchResultsCard';

import { colors } from '../../theme'; 

const BookSearchResultsList = ({ books }) => {
  return (
    <div style={styles.root}>
      {books.map((book) => {
        return (
          <BookSearchResultsCard key={book.id} book={book} />
        );
      })}
    </div>
  );
};

const styles = {
  root: {
    alignItems: 'center',
    background: colors.white,
    borderRadius: '0 0 16px 16px',
    boxShadow: '0 8px 16px 0 #E0E2E4',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'hidden',
    position: 'relative'
  }
};

export default BookSearchResultsList;