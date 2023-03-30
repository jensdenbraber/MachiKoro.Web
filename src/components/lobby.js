import React, { useState, useEffect, useRef } from 'react'
import { Button, ButtonGroup, Grid, Box, TextField, Input, FormHelperText } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { HubConnectionBuilder } from '@microsoft/signalr';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Label } from '@mui/icons-material';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Lobby() {

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [numberOfPlayers, setNumberOfPlayers] = React.useState('');
    const [gameType, setGameTypes] = React.useState('');

    const handleChange = (event) => {
        setNumberOfPlayers(event.target.value);
    };

    const handleGameTypeChange = (event) => {
        setGameTypes(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
            width: 150,
            valueGetter: (params) =>
                `${params.row.currentPlayers || ''} / ${params.row.maxPlayers || ''}`,
        },
        {
            field: 'gameType',
            headerName: 'Game Type',
            description: 'This column has a value getter and is not sortable.',
            width: 150,
        },
    ];

    const rows = [
        { id: 1, gameName: 'Jon', currentPlayers: 2, maxPlayers: 4, gameType: "Basic" },
        { id: 2, gameName: 'Cersei', currentPlayers: 1, maxPlayers: 2, gameType: "Basic" },
        { id: 3, gameName: 'Jaime', currentPlayers: 2, maxPlayers: 3, gameType: "Basic" },
        { id: 4, gameName: 'Arya', currentPlayers: 2, maxPlayers: 4, gameType: "Basic" },
        { id: 5, gameName: 'Daenerys', currentPlayers: 2, maxPlayers: 4, gameType: "Basic" },
        { id: 6, gameName: 'Sjaak', currentPlayers: 2, maxPlayers: 4, gameType: "Basic" },
        { id: 7, gameName: 'Ferrara', currentPlayers: 1, maxPlayers: 2, gameType: "Basic" },
        { id: 8, gameName: 'Rossini', currentPlayers: 1, maxPlayers: 2, gameType: "Basic" },
        { id: 9, gameName: 'Harvey', currentPlayers: 2, maxPlayers: 3, gameType: "Basic" },
    ];

    return (<form noValidate autoComplete="off">
        <div>
            <Grid container>
                <Box sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 50,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        disableRowSelectionOnClick
                        disableColumnMenu
                    />
                </Box>
                <ButtonGroup orientation="horizontal" variant="outlined" color="primary">
                    <Button onClick={handleClickOpen} variant="contained"
                        color="primary"
                        startIcon={''}>
                        createGame
                    </Button>
                    <Dialog
                        fullScreen={fullScreen}
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="responsive-dialog-title"
                    >
                        <DialogTitle id="responsive-dialog-title">
                            {"Create a new game"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Select properties form the new game:
                            </DialogContentText>
                            <DialogContent>
                                    <InputLabel id="demo-simple-select-label">Players</InputLabel>
                                    <Select fullWidth
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={numberOfPlayers}
                                        label="Players"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                    </Select>

                                    <InputLabel id="demo-simple-select-label1">Game type</InputLabel>
                                    <Select fullWidth
                                        labelId="demo-simple-select-label1"
                                        id="demo-simple-select1"
                                        value={gameType}
                                        label="GameType"
                                        onChange={handleGameTypeChange}
                                    >
                                        <MenuItem value={"basic"}>Basic</MenuItem>
                                        <MenuItem value={"harbor"}>Harbor</MenuItem>
                                    </Select>
                            </DialogContent>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button onClick={handleClose} autoFocus>
                                Create Game
                            </Button>
                        </DialogActions>
                    </Dialog>
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