import GoldCoin from './goldCoin'
import Establishments from './establishments'
import Landmarks from './landmarks'

import { makeStyles } from '@mui/styles';

const useStyles2 = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%'
    },
    paper: {
        // padding: theme.spacing(2),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
    },
}));

export default function PlayerInventory(inventory) {

    const classes = useStyles2();

    return (<div >
        <GoldCoin coins={inventory.coins}></GoldCoin>
        <Landmarks landmarks={inventory.landmarks}>Landmarks</Landmarks>
        <Establishments establishments={inventory.establishments}>Establishments</Establishments>
    </div>);
}