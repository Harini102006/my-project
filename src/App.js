import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import Payment from './Payment'; // ✅ Capital P, matches the filename exactly


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/payment" element={<Payment />} />
 {/* ✅ Fixed: Added Payment route */}
      </Routes>
    </Router>
  );
}

export default App;
