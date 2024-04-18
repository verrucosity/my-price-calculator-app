// App.js

import React from 'react';
import './App.css';
import PriceCalculator from './PriceCalculator'; // Make sure this path is correct based on where you save the component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PriceCalculator />
      </header>
    </div>
  );
}

export default App;
