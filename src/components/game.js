import React, { useState, useEffect } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import ActionBar from './actionBar/diceRoll'
import DeckInventory from './deckInventory'
import GameInfo from './gameInfo'
import Player from './player'
import TurnState from './turnState'

import { Button, Grid, Paper } from '@mui/material';

export default function Game() {

  const [dice, setDice] = useState([])
  // const [userData] = useState([])
  const [game] = useState([])
  const [deckInventory] = useState([])
  const [connection, setConnection] = useState([])

  useEffect(() => {
    const connection = new HubConnectionBuilder()
      .withUrl('https://localhost:5001/hubs/GameHub')
      .withAutomaticReconnect()
      .build();

    setConnection(connection)

    connection.start()
      .then(result => {
        console.log('Connected to the game!');

        // var user = "Jens"
        // var message = "The message"

        // connection.invoke("SendMessage", user, message)

        connection.on('Winner', (user, message) => {
          console.log("winner: " + message)
        });

        connection.on('DiceRoll', message => {

          console.log("DiceRoll: " + message)

          setDice(message)


          // console.log("userData: " + userData)

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
      "type": "ConstructEstablishment",
      "choice": {
        "cardId": "4082C11C-58C5-4EEF-BAB5-1FE6DE1E7120"
      }
    })

    console.log('setChoice()')

    try {
      await connection.invoke("Choice", "9ED62043-A403-4466-9168-5DEE2DB3088D", choice);
    } catch (err) {
      console.error(err);
    }
  }

  async function throwDice() {
    try {
      await connection.invoke("RollDice", "9ED62043-A403-4466-9168-5DEE2DB3088D");
    } catch (err) {
      console.error(err);
    }
  }

  return (<div>
    <Grid container spacing={1}>
      <Grid item xs={3}>
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <Player name={game}></Player>
          <Button onClick={setChoice} variant="contained"
            color="primary">
            Choice
          </Button>
          <Button onClick={throwDice} variant="contained"
            color="primary">
            Throw dice
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}>
        {/* <Paper>
          <Player>Player 2</Player>
        </Paper> */}
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <TurnState></TurnState>
          <GameInfo>
          </GameInfo>
          Dice: {dice}
          <DeckInventory deckInventory={deckInventory}>
            Deck inventory
          </DeckInventory>
          <ActionBar>
          </ActionBar>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        {/* <Paper>
          <Player>Player 3</Player>
        </Paper> */}
      </Grid>
      <Grid item xs={3}>
      </Grid>
      <Grid item xs={6}>
        <Paper>
          <Player name={game} inventory={game}></Player>
        </Paper>
      </Grid>
      <Grid item xs={3}>
      </Grid>
    </Grid>
  </div>);
}