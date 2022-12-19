import { Grid } from '@mui/material';

export default function Landmarks({ landmarks }) {

    return (<Grid container>
        landmarks
        {/* {landmarks.forEach((landmark) => (
            <Card cardData={landmark} >
            </Card>
        ))} */}
    </Grid>);
}