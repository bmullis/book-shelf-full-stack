import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import useDebounce from '../../hooks/useDebounce';

import loadingIcon from '../../assets/images/dots.gif';
import { colors } from '../../theme';

const BookSearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [hasResults, setHasResults] = useState(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      props.resetSearchResults();
      setIsSearching(true);
      setHasResults(true);
      doBookSearch()
    } else {
      props.resetSearchResults();
      setHasResults(false);
    }
  }, [debouncedSearchTerm]);

  const doBookSearch = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
    .then((response) => {
      props.getSearchResults(response.data.items);
      setHasResults(true);
      setIsSearching(false);
    })
    .catch((err) => {
      console.log('Error: ' + err);
      setIsSearching(false)
    })
  };

  return (
    <Fragment>
      <input 
        className={hasResults ? 'has-results' : ''}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search for a book by Title, Author, or ISBN..."
        style={styles.root}
        value={searchTerm}
      />
      {isSearching && <div style={styles.searching}><img style={styles.loader} src={loadingIcon} alt="Loading icon" /></div>}
    </Fragment>
  );
};

const styles = {
  root: {
    border: 'none',
    borderRadius: '16px',
    boxShadow: '0 8px 16px 0 #E0E2E4',
    color: colors.gray100,
    fontSize: '1rem',
    fontWeight: 400,
    outline: 'none',
    padding: '1rem 2rem',
    position: 'relative',
    width: '100%',
  },
  searching: {
    background: colors.white,
    borderRadius: '0 0 16px 16px',
    boxShadow: '0 8px 16px 0 #E0E2E4',
    margin: 0,
    padding: 0,
    position: 'relative',
    textAlign: 'center'
  },
  loader: {
    width: '70px'
  }
};

export default BookSearchForm;