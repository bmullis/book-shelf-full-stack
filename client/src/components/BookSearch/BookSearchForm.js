import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import useDebounce from '../../hooks/useDebounce';

import { colors } from '../../theme';

const BookSearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      doBookSearch()
    } else {
      props.resetSearchResults();
    }
  }, [debouncedSearchTerm]);

  const doBookSearch = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
    .then((response) => {
      props.getSearchResults(response.data.items);
      setIsSearching(false)
    })
    .catch((err) => {
      console.log('Error: ' + err);
      setIsSearching(false)
    })
  };

  return (
    <Fragment>
      <input 
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search for a book by Title, Author, or ISBN..."
        style={styles.root}
        value={searchTerm}
      />
      {isSearching && <div>Searching...</div>}
    </Fragment>
  );
};

const styles = {
  root: {
    color: colors.gray200,
    fontSize: '1.2rem',
    padding: '1rem 2rem',
    width: '100%'
  }
};

export default BookSearchForm;