import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component that produces some HTML
const App = () => {
  return <div>Hi!</div>;
}

// Take the component HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
