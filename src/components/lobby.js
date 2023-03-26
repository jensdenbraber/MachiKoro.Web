import React, { useState, useEffect, useRef } from 'react'
import { Button, ButtonGroup, Grid, Box, TextField } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
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

        var url = `/api/v1/games/${gameId}/start`
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

    const columns = [
        {
            field: 'gameName',
            headerName: 'Game name',
            width: 150,
        },
        {
            field: 'players',
            headerName: 'Players',
            type: 'number',
            width: 110
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 1, firstName: 'Jon', age: 35 },
        { id: 2, firstName: 'Cersei', age: 42 },
        { id: 3, firstName: 'Jaime', age: 45 },
        { id: 4, firstName: 'Arya', age: 16 },
        { id: 5, firstName: 'Daenerys', age: null },
        { id: 6, firstName: null, age: 150 },
        { id: 7, firstName: 'Ferrara', age: 44 },
        { id: 8, firstName: 'Rossini', age: 36 },
        { id: 9, firstName: 'Harvey', age: 65 },
    ];

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
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        disableRowSelectionOnClick
                    />
                </Box>
            </Grid>
        </div>
    </form>);
}