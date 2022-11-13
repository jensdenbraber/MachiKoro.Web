import React, { useState, useEffect, useRef } from 'react'
import { Button, ButtonGroup, Grid, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ArrowRight } from '@mui/icons-material';
import { useCookies } from 'react-cookie';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      // margin: theme.spacing(1),
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
  const [cookies, setCookie] = useCookies(['refreshToken']);

  function login() {
    console.log("login")
    console.log('{userName: ' + username + ', password: ' + password + '}')

    var debug = true

    var host = ""
    if (debug)
      host = "https://localhost:5001"

    var url = "/api/v1/identity/login"
    var fetchUrl = host + url

    fetch(fetchUrl, {
      method: 'POST',
      mode: "cors",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName: username, password: password })
    })
      .then(async response => {
        const responseData = await response.json();

        console.log(responseData);

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          console.log("ERROR login!!")
          const error = (responseData && responseData.message) || responseData.statusText;
          return Promise.reject(error);
        }

        console.log("Login successfully!!")
        localStorage.setItem('userData', JSON.stringify(responseData));

        return responseData;
      })
      .then({//TODO go to lobby
      })
      .catch(err => { console.error(err) })
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
            startIcon={<ArrowRight />}>
            Register
          </Button>
          <Button onClick={login} variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<ArrowRight />}>
            Login
          </Button>
        </ButtonGroup>
      </Grid>
    </div>
  </form>);
}