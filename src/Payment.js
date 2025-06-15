// Payment.js
import React from 'react';
import bgImage from './assets/bck.jpg';
import { useNavigate } from 'react-router-dom';
function Payment() {
  const navigate = useNavigate();
  const goTobill = () => {
    navigate('/bill');
  }
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
      <h1>amount:</h1>
      <h1>Gst:18rs</h1>
      <h1> Total amount:</h1>
      <div style={{ marginTop: '0px' }}>
        <button
          style={{
            padding: '0px',
            fontSize: '16px',
            backgroundColor: '#6f4e37',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/bill')}
        >
          Proceed to pay
        </button>
         </div>
   </div>
  );
}

export default Payment;
