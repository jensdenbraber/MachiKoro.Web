import React, { useState, useEffect, useRef } from 'react'
import { Button, ButtonGroup, Grid, TextField } from '@mui/material';
import { HubConnectionBuilder } from '@microsoft/signalr';

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

    const [gameId, setGameId] = useState('')

    function createGame() {
        console.log("create game")
        var debug = true

        var host = ""
        if (debug)
            host = "https://localhost:5001"

        var url = "/api/v1/games"
        var fetchUrl = host + url

        console.log('fetchUrl: ' + fetchUrl)

        var token = localStorage.getItem('userData')

        var userId = "7A13D702-9138-4304-8B02-B8CBE37A2CA6"

        if (token)
            userId = JSON.parse(token)['userId']

        fetch(fetchUrl, {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ playerId: userId, maxNumberOfPlayers: 2, expansionType: 'Basic' })
        })
    }

    function joinGame() {
        console.log("join game")
        var debug = true

        var host = ""
        if (debug)
            host = "https://localhost:5001"

        console.log('token: ' + localStorage.getItem('userData'))

        var token = localStorage.getItem('userData')

        var userId = JSON.parse(token)['userId']

        console.log('userId: ' + userId)

        var url = "/api/v1/games/" + gameId + "/players/" + userId
        var fetchUrl = host + url

        console.log('fetchUrl: ' + fetchUrl)

        fetch(fetchUrl, {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }

    function startGame() {
        console.log("start game")
        var debug = true

        var host = ""
        if (debug)
            host = "https://localhost:5001"

        var url = "/api/v1/games/" + gameId + "/start"
        var fetchUrl = host + url

        console.log('fetchUrl: ' + fetchUrl)

        fetch(fetchUrl, {
            method: 'POST',
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
    return (<form noValidate autoComplete="off">
        <div>
            <Grid container>
                <ButtonGroup orientation="horizontal" variant="outlined" color="primary">
                    <Button onClick={createGame} variant="contained"
                        color="primary"
                        startIcon={''}>
                        createGame
                    </Button>
                    <Button onClick={joinGame} variant="contained"
                        color="primary"
                        startIcon={''}>
                        JoinGame
                    </Button>
                    <TextField
                        required
                        id="filled-password-input"
                        label="JoinGame"
                        type="text"
                        variant="filled"
                        onChange={e => setGameId(e.target.value)}
                    />
                    <Button onClick={startGame} variant="contained"
                        color="primary"
                        startIcon={''}>
                        StartGame
                    </Button>
                </ButtonGroup>
            </Grid>
        </div>
    </form>);
}