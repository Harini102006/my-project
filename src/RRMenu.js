 import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';
import img6 from './img6.jpg';
import bgImage from './assets/bck.jpg';

export default function RRMenu() {
  const navigate = useNavigate();

  const [quantities, setQuantities] = useState({
    espresso: 0,
    cappuccino: 0,
    latte: 0,
    samosa: 0,
    smiles: 0,
    fries: 0,
  });

  const addItem = (item) => {
    setQuantities((prev) => ({
      ...prev,
      [item]: prev[item] + 1,
    }));
  };

  const removeItem = (item) => {
    setQuantities((prev) => ({
      ...prev,
      [item]: prev[item] > 0 ? prev[item] - 1 : 0,
    }));
  };

  const itemStyle = {
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    marginBottom: '20px',
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: '10px',
    borderRadius: '8px',
  };

  const imageStyle = {
    borderRadius: '10px',
    width: '100px',
    height: '90px',
  };

  const textStyle = {
    textAlign: 'left',
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        color: 'black',
      }}
    >
      <h1 style={{ backgroundColor: 'white', padding: '10px 20px', borderRadius: '10px' }}><i>
        RR BRIYANI
      </i></h1>

      {/* Scrollable Menu Items */}
      <div
        style={{
          flex: 1,
          width: '100%',
          maxWidth: '600px',
          overflowY: 'auto',
          maxHeight: '70vh',
          marginTop: '20px',
          paddingRight: '10px',
        }}
      >
        <div style={itemStyle}>
          <img src={img3} alt="chicken briyani" style={imageStyle} />
          <div style={textStyle}>
            <h3>chicken briyani</h3>
            <p>$275</p>
            <div>
              <button onClick={() => removeItem('espresso')}>Remove</button>
              <span style={{ margin: '0 15px' }}>{quantities.espresso}</span>
              <button onClick={() => addItem('espresso')}>Add</button>
            </div>
          </div>
        </div>

        <div style={itemStyle}>
          <img src={img2} alt="mutton briyani" style={imageStyle} />
          <div style={textStyle}>
            <h3>Mutton Briyani</h3>
            <p>$365</p>
            <div>
              <button onClick={() => removeItem('cappuccino')}>Remove</button>
              <span style={{ margin: '0 15px' }}>{quantities.cappuccino}</span>
              <button onClick={() => addItem('cappuccino')}>Add</button>
            </div>
          </div>
        </div>

        <div style={itemStyle}>
          <img src={img4} alt="Latte" style={imageStyle} />
          <div style={textStyle}>
            <h3>Chicken Gravy</h3>
            <p>$400</p>
            <div>
              <button onClick={() => removeItem('latte')}>Remove</button>
              <span style={{ margin: '0 15px' }}>{quantities.latte}</span>
              <button onClick={() => addItem('latte')}>Add</button>
            </div>
          </div>
        </div>

        <div style={itemStyle}>
          <img src={img5} alt="Samosa" style={imageStyle} />
          <div style={textStyle}>
            <h3>Grill</h3>
            <p>$360</p>
            <div>
              <button onClick={() => removeItem('samosa')}>Remove</button>
              <span style={{ margin: '0 15px' }}>{quantities.samosa}</span>
              <button onClick={() => addItem('samosa')}>Add</button>
            </div>
          </div>
        </div>

        <div style={itemStyle}>
          <img src={img6} alt="Smiles" style={imageStyle} />
          <div style={textStyle}>
            <h3>thandoori (4pcs)</h3>
            <p>$400</p>
            <div>
              <button onClick={() => removeItem('smiles')}>Remove</button>
              <span style={{ margin: '0 15px' }}>{quantities.smiles}</span>
              <button onClick={() => addItem('smiles')}>Add</button>
            </div>
          </div>
        </div>

        <div style={itemStyle}>
          <img src={img1} alt="Fries" style={imageStyle} />
          <div style={textStyle}>
            <h3>mutton suka</h3>
            <p>$650</p>
            <div>
              <button onClick={() => removeItem('fries')}>Remove</button>
              <span style={{ margin: '0 15px' }}>{quantities.fries}</span>
              <button onClick={() => addItem('fries')}>Add</button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Button */}
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
          }}
          onClick={() => navigate('/payment')}
        >
          Go to Payment
        </button>
      </div>
    </div>
  );
}
