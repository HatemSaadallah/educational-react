import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Hello from a new parapraph
        </p>
        <Person />
      </header>
    </div>
  );
}

export default App;
