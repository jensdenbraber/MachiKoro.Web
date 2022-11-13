import React from 'react';
import { makeStyles } from '@mui/styles';
import Avatar from '@mui/material/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  }
}));

export default function GoldCoin({ coins }) {

  const classes = useStyles();

  return (<div className={classes.root}>
    <Avatar className={classes.avatar}>
      coins: {coins}
    </Avatar>
  </div>
  );
}