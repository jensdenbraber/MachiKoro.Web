import { React, useState } from 'react';
import ActionBar from '../components/actionBar'
import Player from '../components/player'
import TurnState from '../components/turnState'
import GameInfo from '../components/GameInfo'
import DeckInventory from '../components/DeckInventory'

import { Button, Paper, Grid } from '@mui/material';

export default function Game() {

    const [dice, setDice] = useState([])
    const [userData, setUserData] = useState([])
    const [game, setGame] = useState([])
    const [deckInventory, setDeckInventory] = useState([])
    const [connection, setConnection] = useState([])

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