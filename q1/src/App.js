import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Components/Person';
function App() {
  return (
    <div className="App">
      <Person name="Ahmed" age="16">
        Code for Palestine
      </Person>
    </div>
  );
}

export default App;
