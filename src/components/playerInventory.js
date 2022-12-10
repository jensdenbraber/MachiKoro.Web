import GoldCoin from './goldCoin'
import Establishments from './establishments'
import Landmarks from './landmarks'

export default function PlayerInventory(inventory) {

    return (<div >
        <GoldCoin coins={inventory.coins}></GoldCoin>
        <Landmarks landmarks={inventory.landmarks}>Landmarks</Landmarks>
        <Establishments establishments={inventory.establishments}>Establishments</Establishments>
    </div>);
}