import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Main from './Main';
import Single from './Single';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Single />
      <Main />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));