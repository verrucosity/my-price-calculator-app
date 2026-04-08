// App.js

import React, { useState } from 'react';
import './App.css';
import PriceCalculator from './PriceCalculator';
import PlantCareReference from './PlantCareReference';
import EmojiCodeGuide from './EmojiCodeGuide';
import MulchCalculator from './MulchCalculator';

function App() {
  const [activeTab, setActiveTab] = useState('calculator');

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1 className="app-title">Nature's Cradle Toolbox</h1>
          <p className="app-subtitle">Business Tools & Plant Care Resources</p>
        </div>

        <div className="tabs-container">
          <button 
            className={`tab-button ${activeTab === 'calculator' ? 'active' : ''}`}
            onClick={() => setActiveTab('calculator')}
          >
            💰 Price Calculator
          </button>
          <button 
            className={`tab-button ${activeTab === 'mulch' ? 'active' : ''}`}
            onClick={() => setActiveTab('mulch')}
          >
            🪴 Mulch Calculator
          </button>
          <button 
            className={`tab-button ${activeTab === 'plants' ? 'active' : ''}`}
            onClick={() => setActiveTab('plants')}
          >
            🌿 Plant Care Guide
          </button>
          <button 
            className={`tab-button ${activeTab === 'codes' ? 'active' : ''}`}
            onClick={() => setActiveTab('codes')}
          >
            📋 Emoji Code Guide
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'calculator' && <PriceCalculator />}
          {activeTab === 'mulch' && <MulchCalculator />}
          {activeTab === 'plants' && <PlantCareReference />}
          {activeTab === 'codes' && <EmojiCodeGuide />}
        </div>
      </header>
    </div>
  );
}

export default App;
