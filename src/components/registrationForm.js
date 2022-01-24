import React, { useState, useEffect, useRef } from 'react'
import { Button, ButtonGroup, Grid, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      // margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function RegistrationForm() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function register() {
    console.log("register")
    console.log('{userName: ' + username + ', password: ' + password + '}')

    var debug = true

    var host = ""
    if (debug)
      host = "https://localhost:5001"

    var url = "/api/v1/identity/register"
    var fetchUrl = host + url

    console.log('fetchUrl: ' + fetchUrl)

    fetch(fetchUrl, {
      method: 'POST',
      mode: "cors",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName: username, password: password })
    })

      .then(response => { return response.json(); })
      .then(responseData => {
        console.log(responseData);

        // check for error response
        if (!responseData.ok) {
          // get error message from body or default to response statusText
          console.log("ERROR registration!!")
          const error = (responseData && responseData.message) || responseData.statusText;
          return Promise.reject(error);
        }

        localStorage.setItem('userData', JSON.stringify(responseData));
        return responseData;
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
            startIcon={''}>
            Register
          </Button>
        </ButtonGroup>
      </Grid>
    </div>
  </form>);
}