// hotallist.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const hotels = [
  { id: 1, name: 'cofee-cofee-day', location: 'Chennai', cuisine: 'South Indian' },
  { id: 2, name: 'Sree Bhavan', location: 'Madurai', cuisine: 'North Indian' },
  { id: 3, name: 'Hotel Saravana Bhavan', location: 'Coimbatore', cuisine: 'Veg Meals' },
  { id: 4, name: 'Amman Restarunt', location: 'Chennai', cuisine: 'South Indian' },
  { id: 5, name: 'RR Briyani', location: 'Madurai', cuisine: 'North Indian' },
  { id: 6, name: '12 o clock ', location: 'CoimbatoreMadurai', cuisine: 'Non-veg ' },
];

function Hotallist() {
  const navigate = useNavigate();

  const handleNavigation = (hotel) => {
  console.log('Navigating hotel:', hotel);
  if (hotel.name === 'RR Briyani') {
    console.log('Going to RR Menu');
    navigate(`/rr/${hotel.id}`);
  } else {
    console.log('Going to normal Menu');
    navigate(`/menu/${hotel.id}`);
  }
  };

  return (
    <div style={{ padding: '30px', backgroundColor: '#fffbe7', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center' }}>🍽️ Available Hotels</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            onClick={() => handleNavigation(hotel)}
            style={{
              padding: '15px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              cursor: 'pointer',
              backgroundColor: '#fefefe',
              boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <h3>{hotel.name}</h3>
            <p>📍 {hotel.location}</p>
            <p>🍛 Cuisine: {hotel.cuisine}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotallist;
