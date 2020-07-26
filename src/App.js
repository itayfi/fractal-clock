import React from 'react';
import './App.css';

import {SettingsProvider} from './SettingsContext.js';
import SettingsPanel from './SettingsPanel.js';
import Clock from './Clock.js';

function App() {
  return (
    <SettingsProvider>
      <div className="App">
        <SettingsPanel />
        <Clock />
      </div>
    </SettingsProvider>
  );
}

export default App;
