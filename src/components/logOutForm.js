import React, { useState, useEffect, useRef } from 'react'
import { Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ArrowRight } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            // margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function LogOutForm() {

    function logOut() {
        localStorage.removeItem('userData');
    }

    const classes = useStyles();

    return (<form className={classes.root} noValidate autoComplete="off">
        <div>
            <Grid container>
                <Button onClick={logOut} variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<ArrowRight />}>
                    Log Out
                </Button>
            </Grid>
        </div>
    </form>);
}
