import Card from './card'
import Deck from './deck'
import { Grid } from '@mui/material';

export default function DeckInventory() {

    return (<Grid container spacing={1}>
        <Grid item xs={4}>
            <Grid item xs={12}>
                <Deck>
                    Deck 1
                </Deck>
            </Grid>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
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
            <Grid item xs={12}>
                <Card xs={6}>1</Card>
                <Card xs={6}>2</Card>
                <Card xs={6}>3</Card>
                <Card xs={6}>4</Card>
            </Grid>
        </Grid>
    </Grid>);
}