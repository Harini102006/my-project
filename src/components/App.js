// App.js
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import bgImage from './assets/bck.jpg';
import CoffeeMenuPage from './components/CoffeeMenuPage';

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      {!showMenu ? (
        <header className="App-header">
          <h1><i>Coffee-Coffee-Day</i></h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hot coffee can change your mood.</p>
          <button
            className="App-link"
            onClick={() => setShowMenu(true)}
          >
            View Menu
          </button>
        </header>
      ) : (
        <CoffeeMenuPage />
      )}
    </div>
  );
}

export default App;
