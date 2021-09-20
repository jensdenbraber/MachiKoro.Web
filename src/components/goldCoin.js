import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      height: '100%',
    }
  }));
  
export default function GoldCoin() {

    const classes = useStyles();

    return (<div className={classes.root}>
        <Avatar className={classes.avatar}>
            12
        </Avatar>
        </div>
    );
}