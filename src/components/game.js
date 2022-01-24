import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { makeStyles } from '@mui/styles';
import ActionBar from './actionBar/diceRoll'
import DeckInventory from './deckInventory'
import GameInfo from './gameInfo'
import Player from './player'

import { Button, Grid, Paper } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%'
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
}));

export default function Game() {

  const [dice, setDice] = useState([]);
  const [userData, setUserData] = useState([]);
  const [connection, setConnection] = useState([]);

  useEffect(() => {
    const connection = new HubConnectionBuilder()
      .withUrl('https://localhost:5001/hubs/GameHub')
      .withAutomaticReconnect()
      .build();

    setConnection(connection)

    connection.start()
      .then(result => {
        console.log('Connected to the game!');

        var user = "Jens"
        var message = "The message"

        // connection.invoke("SendMessage", user, message)

        connection.on('Winner', (user, message) => {
          console.log("winner: " + message)
        });

        connection.on('DiceRoll', message => {

          console.log("DiceRoll: " + message)

          setDice(message)


          console.log("userData: " + userData)

          // const updatedChat = [...latestChat.current];
          // updatedChat.push(message);

          // setChat(updatedChat);
        });
      })
      .catch(e => console.log('Connection to the game failed: ', e));
  }, []);

  async function setChoice() {
    var choice = JSON.stringify({
      "phase": "construction",
      "type": "buy",
      "choice": {
        "cardId": "4082C11C-58C5-4EEF-BAB5-1FE6DE1E7120"
      }
    })

    console.log('setChoice()')

    try {
      await connection.invoke("Choice", choice);
    } catch (err) {
      console.error(err);
    }
  }

  const classes = useStyles();

  return (<div className={classes.root}>
    <Grid container spacing={1}>
      <Grid item xs={3}>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Player>Player 1</Player>
          <Button onClick={setChoice} variant="contained"
            color="primary"
            className={classes.button}>
            Choice
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <Player>Player 2</Player>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <GameInfo>
          </GameInfo>
          Dice: {dice}
          <DeckInventory>
            Deck inventory
          </DeckInventory>
          <ActionBar>
          </ActionBar>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <Player>Player 3</Player>
        </Paper>
      </Grid>
      <Grid item xs={3}>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Player>Player 4</Player>
        </Paper>
      </Grid>
      <Grid item xs={3}>
      </Grid>
    </Grid>
  </div>);
}