import React, { useState, useEffect, useRef } from 'react'
import { Button, ButtonGroup, Grid, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { HubConnectionBuilder } from '@microsoft/signalr';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            // margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Lobby() {

    useEffect(() => {
        const connection = new HubConnectionBuilder()
            .withUrl('https://localhost:5001/hubs/GameLobbyHub')
            .withAutomaticReconnect()
            .build();

        connection.start()
            .then(result => {
                console.log('Connected to the lobby!');

                connection.on('DiceRoll', message => {

                    // const updatedChat = [...latestChat.current];
                    // updatedChat.push(message);

                    // setChat(updatedChat);
                });
            })
            .catch(e => console.log('Connection to the lobby failed: ', e));
    }, []);

    function createGame() {
        console.log("create game")
        var debug = true

        var host = ""
        if (debug)
            host = "https://localhost:5001"

        var url = "/api/v1/games"
        var fetchUrl = host + url

        console.log('fetchUrl: ' + fetchUrl)

        fetch(fetchUrl, {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ maxNumberOfPlayers: 2, expensionType: 'Basic' })
        })
    }

    const classes = useStyles();

    return (<form className={classes.root} noValidate autoComplete="off">
        <div>
            <Grid container>
                <ButtonGroup orientation="horizontal" variant="outlined" color="primary">
                    <Button onClick={createGame} variant="contained"
                        color="primary"
                        className={classes.button}
                        startIcon={''}>
                        createGame
                    </Button>
                </ButtonGroup>
            </Grid>
        </div>
    </form>);
}