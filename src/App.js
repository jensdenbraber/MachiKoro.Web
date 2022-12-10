// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef, Component } from 'react'
import Game from './components/game'
import RegistrationForm from './components/registrationForm'
import LoginForm from './components/loginForm'
import Lobby from './components/lobby'
import LogOutForm from './components/logOutForm';

function App() {
  return (
    <div className="App">
      <Lobby></Lobby>
      <RegistrationForm></RegistrationForm>
      <LoginForm></LoginForm>
      <LogOutForm></LogOutForm>
      <Game></Game>
    </div>
  );
}

export default App;
