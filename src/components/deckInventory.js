import Card from './card'
import Deck from './deck'

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles1 = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function DeckInventory() {

    const classes = useStyles1();

    return (<Grid className={classes.root} container spacing={1}>
        <Grid item xs={4}>
            <Grid item xs={12}>
                <Deck>
                    Deck 1
                </Deck>
            </Grid>
            <Grid container xs={12}>
                <Card xs={6}>1</Card>
                <Card xs={6}>2</Card>
                <Card xs={6}>3</Card>
                <Card xs={6}>4</Card>
            </Grid>
        </Grid>
        <Grid item xs={4}>
            <Grid item xs={12}>
                <Deck>
                    Deck 2
                </Deck>
            </Grid>
            <Grid container xs={12}>
                <Card xs={6}>1</Card>
                <Card xs={6}>2</Card>
                <Card xs={6}>3</Card>
                <Card xs={6}>4</Card>
            </Grid>
        </Grid>
        <Grid item xs={4}>
            <Grid item xs={12}>
                <Deck>
                    Deck 3
                </Deck>
            </Grid>
            <Grid container xs={12}>
                <Card xs={6}>1</Card>
                <Card xs={6}>2</Card>
                <Card xs={6}>3</Card>
                <Card xs={6}>4</Card>
            </Grid>
        </Grid>
    </Grid>);
}