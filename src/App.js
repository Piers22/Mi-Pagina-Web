import React from 'react';
import Header from './Header';
import Main from './Main';
import Single from './Single'; // Importa Single si también necesitas mostrarlo
import './style.css';

const App = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Single />
        <Main />
      </div>
    </div>
  );
};

export default App;
