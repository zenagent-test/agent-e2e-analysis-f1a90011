import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple React App</h1>
        <p>
          This is a simple React application for testing the agent.
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}>Click me</button>
      </header>
    </div>
  );
}

export default App;