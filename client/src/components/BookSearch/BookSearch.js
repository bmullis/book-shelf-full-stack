import React, { useState } from 'react';

import BookSearchForm from './BookSearchForm';
import BookSearchResultsList from './BookSearchResultsList';

const BookSearch = () => {
  const [searchRes, setSearchRes] = useState([]);

  const getSearchResults = (res) => {
    console.log(res);
    setSearchRes(res);
  };

  const resetSearchResults = () => {
    setSearchRes([]);
  };

  return (
    <div>
      <BookSearchForm 
        getSearchResults={getSearchResults} 
        resetSearchResults={resetSearchResults} 
      />
      {searchRes && <BookSearchResultsList books={searchRes} />}
    </div>
  );
};

export default BookSearch;