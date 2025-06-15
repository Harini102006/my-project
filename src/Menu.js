import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import download from './download.jpeg';
import download1 from './download1.jpeg';
import download2 from './download2.jpeg';
import images from './images.jpeg';
import images1 from './images1.jpeg';
import images2 from './images2.jpeg';
import bgImage from './assets/bck.jpg';
import Payment from './Payment';

function Menu() {
  const navigate = useNavigate();
  const goToPayment = () => {
    navigate('/Payment');
  };
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
      <h2 style={{ padding: 0, marginTop: 0 }}>Our Coffee Menu</h2>

      <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', marginTop: '0px' }}>
        <div>
          <img src={download} alt="Espresso" style={{ borderRadius: '10px', width: '100px', height: '90px' }} />
          <p style={{padding:'0px'}}>Espresso</p>
          <p style={{padding:'0px'}}>$130</p>
          <div>
            <button onClick={() => removeItem('espresso')}>Remove</button>
            <span style={{ margin: '0 15px' }}>{quantities.espresso}</span>
            <button onClick={() => addItem('espresso')}>Add</button>
          </div>
        </div>

        <div>
          <img src={download1} alt="Cappuccino" style={{ borderRadius: '10px', width: '100px', height: '90px' }} />
          <p style={{padding:'0px'}}>Cappuccino</p>
          <p style={{padding:'0px'}}> $150</p>
          <div>
            <button onClick={() => removeItem('cappuccino')}>Remove</button>
            <span style={{ margin: '0 15px' }}>{quantities.cappuccino}</span>
            <button onClick={() => addItem('cappuccino')}>Add</button>
          </div>
        </div>

        <div>
          <img src={download2} alt="Latte" style={{ borderRadius: '10px', width: '100px', height: '90px' }} />
          <p style={{padding:'0px'}}>Latte</p>
          <p style={{padding:'0px'}}> $140</p>
          <div>
            <button onClick={() => removeItem('latte')}>Remove</button>
            <span style={{ margin: '0 15px' }}>{quantities.latte}</span>
            <button onClick={() => addItem('latte')}>Add</button>
          </div>
        </div>
      </div>

      <h2 style={{ marginTop: '10px' }}>Starters Menu</h2>

      <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', marginTop: '10px' }}>
        <div style={{marginBottom:'0px'}}>
          <img src={images1} alt="Samosa" style={{ borderRadius: '10px', width: '100px', height: '80px' }} />
          <p style={{padding:'0px'}}>Samosa</p>
          <p style={{padding:'0px'}}>$180</p>
          <div>
            <button onClick={() => removeItem('samosa')}>Remove</button>
            <span style={{ margin: '0 15px' }}>{quantities.samosa}</span>
            <button onClick={() => addItem('samosa')}>Add</button>
          </div>
        </div>

        <div>
          <img src={images} alt="Smiles" style={{ borderRadius: '10px', width: '90px', height: '80px' }} />
          <p style={{padding:'0px'}}>Smiles (4pcs)</p>
          <p style={{padding:'0px'}}>$100</p>
          <div>
            <button onClick={() => removeItem('smiles')}>Remove</button>
            <span style={{ margin: '0 15px' }}>{quantities.smiles}</span>
            <button onClick={() => addItem('smiles')}>Add</button>
          </div>
        </div>

        <div>
          <img src={images2} alt="Fries" style={{ borderRadius: '10px', width: '100px', height: '80px' }} />
          <p style={{padding:'0px'}}>French Fries</p>
          <p style={{padding:'0px'}}>$20</p>
          <div>
            <button onClick={() => removeItem('fries')}>Remove</button>
            <span style={{ margin: '0 15px' }}>{quantities.fries}</span>
            <button onClick={() => addItem('fries')}>Add</button>
          </div>
        </div>
      </div>

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
          onClick={() => navigate('/payment')}
        >  
          Payment
        </button>
      </div>
    </div>
  );
}

export default Menu;
