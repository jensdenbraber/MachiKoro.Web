import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef, Component } from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import Game from './components/game'
import RegistrationForm from './components/registrationForm'
import LoginForm from './components/loginForm'


// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// }));

function App() {
  return (
    <div className="App">
      <RegistrationForm></RegistrationForm>
      <LoginForm></LoginForm>
      <Game></Game>
    </div>
  );
}

export default App;
