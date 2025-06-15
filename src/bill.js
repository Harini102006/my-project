import React, { useState } from 'react';
import bgImage from './assets/bck.jpg';
import { useNavigate } from 'react-router-dom';

function Bill() {
  const navigate = useNavigate();

  const goToCash = () => {
    navigate('/cash');
  };

  const goToPrePayment = () => {
    navigate('/payment'); // change as needed
  };

  const [quantities, setQuantities] = useState({
    espresso: 0,
    cappuccino: 0,
    latte: 0,
    samosa: 0,
    smiles: 0,
    fries: 0,
  });

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
        paddingTop: '30px',
        color: 'black',
      }}
    >
      <div style={{ marginTop: '20px' }}>
        <button
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#6f4e37',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px',
          }}
          onClick={goToCash}
        >
          Cash on Delivery
        </button>

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
          onClick={goToPrePayment}
        >
          Pre Payment
        </button>
      </div>
    </div>
  );
}

export default Bill;
