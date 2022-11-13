import PlayerInventory from './playerInventory'

export default function Player({ name, inventory }) {

    return (<div>
        name: {name}
        <PlayerInventory inventory={inventory}></PlayerInventory>
    </div>);
}