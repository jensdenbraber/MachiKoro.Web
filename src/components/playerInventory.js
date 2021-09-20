import GoldCoin from './goldCoin'
import Establishments from './establishments'
import Landmarks from './landmarks'

import { makeStyles } from '@material-ui/core/styles';

const useStyles2 = makeStyles((theme) => ({
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

export default function PlayerInventory() {

    const classes = useStyles2();

    return (<div  justifyContent="center">
        <GoldCoin></GoldCoin>
        <Landmarks justifyContent="center">Landmarks</Landmarks>
        <Establishments justifyContent="center" >Establishments</Establishments>
    </div>);
}