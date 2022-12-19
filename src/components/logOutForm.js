import React from 'react'
import { Button, Grid } from '@mui/material';
import { ArrowRight } from '@mui/icons-material';

export default function LogOutForm() {

    function logOut() {
        localStorage.removeItem('userData');
    }

    return (<form noValidate autoComplete="off">
        <div>
            <Grid container>
                <Button onClick={logOut} variant="contained"
                    color="primary"
                    startIcon={<ArrowRight />}>
                    Log Out
                </Button>
            </Grid>
        </div>
    </form>);
}
