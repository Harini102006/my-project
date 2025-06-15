// Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import bgImage from './assets/bck.jpg';

// SearchBar Component (defined outside)
function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: '20px 0' }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <button
        type="submit"
        style={{
          marginLeft: '10px',
          padding: '8px 16px',
          fontSize: '16px',
          backgroundColor: '#6f4e37',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Search
      </button>
    </form>
  );
}

// Home Component
function Home() {
  const navigate = useNavigate();

  const handleSearch = (query) => {
    console.log('Search query:', query);
    // Optionally navigate to a search page
  };

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
      <h1 style={{ marginTop: '0px' }}>Coffee-Coffee-Day</h1>
      <SearchBar onSearch={handleSearch} />
      <div>
        <img src={logo} alt="logo" className="App-logo" />
        <p>Hot coffee can change your mood.</p>
        <button
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#6f4e37',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/menu')}
        >
          Menu
        </button>
      </div>
    </div>
  );
}

export default Home;
