import React, { useState, useEffect, useRef } from 'react'
import { Button, ButtonGroup, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function LoginForm() {
  function register() {
    console.log("register")
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function login() {
    console.log("login")
    console.log('{userName: ' + username + ', password: ' + password + '}')

    var debug = true
    // var room = RoomModel
    // var roomJson = JSON.stringify(room)

    var host = ""
    if (debug)
      host = "http://localhost:3000"

    var url = "/api/v1/login"
    var fetchUrl = host + url

    fetch(fetchUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: '{userName: ' + username + ', password: ' + password + '}'
    })

  }

  const classes = useStyles();

  return (<form className={classes.root} noValidate autoComplete="off">
    <div>
      <Grid container>
        <Grid item>
          <TextField
            required
            id="filled-required"
            label="Username"
            defaultValue=""
            variant="filled"
            onChange={e => setUsername(e.target.value)}
          />
          <TextField
            required
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
            onChange={e => setPassword(e.target.value)}
          />
        </Grid>
        <ButtonGroup orientation="horizontal" variant="outlined" color="primary">
          <Button onClick={register} variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<ArrowRightIcon />}>
            Register
          </Button>
          <Button onClick={login} variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<ArrowRightIcon />}>
            Login
          </Button>
        </ButtonGroup>
      </Grid>
    </div>
  </form>);
}