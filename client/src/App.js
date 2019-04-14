import React from 'react';

import BookSearch from './components/BookSearch/BookSearch';

const App = () => (
  <div style={styles.container}>
    <BookSearch />
  </div>
);

const styles = {
  container: { 
    display: 'block',
    margin: '0 auto',
    width: '60rem'
  }
}

export default App;