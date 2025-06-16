// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hotellist from './Hotellist';
import Menu from './Menu';
import RRMenu from './RRMenu';
import Home from './Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotellist" element={<Hotellist />} />
      <Route path="/menu/:id" element={<Menu />} />
      <Route path="/rr/:id" element={<RRMenu />} />
    </Routes>
  );
}

export default App;

