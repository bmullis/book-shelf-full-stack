import React from 'react';

import BookSearchResultsCard from './BookSearchResultsCard';

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
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
};

export default BookSearchResultsList;