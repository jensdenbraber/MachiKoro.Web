// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef, Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/appMenu'
import Game from './components/game'
import RegistrationForm from './components/registrationForm'
import LoginForm from './components/loginForm'
import Lobby from './components/lobby'
import LogOutForm from './components/logOutForm';

import About from './pages/about';

function App() {
  return (
    // <div className="App">
    //   <ResponsiveAppBar></ResponsiveAppBar>
    //   <Lobby></Lobby>
    //   <RegistrationForm></RegistrationForm>
    //   <LoginForm></LoginForm>
    //   <LogOutForm></LogOutForm>
    //   <Game></Game>
    // </div>

    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route exact path="/" element={<Lobby />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
