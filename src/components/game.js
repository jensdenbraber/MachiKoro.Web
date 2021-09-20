import { makeStyles } from '@material-ui/core/styles';
import ActionBar from './actionBar/diceRoll'
import DeckInventory from './deckInventory'
import GameInfo from './gameInfo'
import Player from './player'

import { Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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

export default function Game() {

  const classes = useStyles();

  return (<div className={classes.root}>
    <Grid container spacing={1}>
      <Grid item xs={3}>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Player>Player 1</Player>
        </Paper>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <Player>Player 2</Player>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <GameInfo>
          </GameInfo>
          <DeckInventory>
            Deck inventory
          </DeckInventory>
          <ActionBar>
          </ActionBar>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <Player>Player 3</Player>
        </Paper>
      </Grid>
      <Grid item xs={3}>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Player>Player 4</Player>
        </Paper>
      </Grid>
      <Grid item xs={3}>
      </Grid>
    </Grid>
  </div>);
}