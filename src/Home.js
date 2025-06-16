import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from './assets/bck.jpg';
import logo from './logo.svg';

function Home() {
  const navigate = useNavigate();
  const goToHotelList = () => {
    navigate('/Hotellist');
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        paddingTop: '40px',
      }}
    >
      <h1 style={{ padding: '20px' }}>
        <i>TastyTrack</i>
      </h1>
      <img src={logo} alt="logo" className="App-logo" />
      <p style={{ padding: '20px' }}>
        <i><b>Good Food Good Mood</b></i>
      </p>
      <button
         onClick={() => navigate('/hotellist')}
 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#6f4e37',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        View Hotels
      </button>
    </div>
  );
}

export default Home;
