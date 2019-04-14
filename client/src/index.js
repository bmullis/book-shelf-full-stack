import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

require('normalize.css');
require('./assets/style.css');

ReactDOM.render(<App />, document.querySelector('#root'));