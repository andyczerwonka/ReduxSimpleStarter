import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyClytfdi9jGJg4AUGWKHDr0jf_eUc-MMns';

// Create a new component that produces some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take the component HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
