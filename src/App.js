// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef, Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/appMenu'
import Lobby from './components/lobby'
import About from './pages/about';

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route exact path="/" element={<Lobby />} />
        <Route exact path="/lobby" element={<Lobby />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
