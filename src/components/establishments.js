import Card from './card'

import { Grid } from '@mui/material';

export default function Establishments({ establishments }) {

    return (<Grid container>
        establishments
        {/* {establishments.forEach((establishment) => (
            <Card cardData={establishment} >
            </Card>
        ))} */}
    </Grid>);
}