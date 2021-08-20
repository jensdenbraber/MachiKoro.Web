import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useRef } from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup, Grid, Paper, Typography, Slider, Input } from '@material-ui/core';
import Card from './components/card'
import Deck from './components/deck'
import Player from './components/player'


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
     <Grid container>
      <Grid item>

          <Button>
            Klikken!!!
          </Button>
          <Player></Player>
      </Grid>
      <Grid item>
        <Deck></Deck>
        <Deck></Deck>
        <Deck></Deck>
      </Grid>
      <Grid item>

        <Button>
          Klikken!!!
        </Button>
        <Player></Player>
      </Grid>
            
     </Grid>

    </div>
  );
}

export default App;
