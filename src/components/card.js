import React from 'react';
import Card from '@mui/material/Card';
import { Avatar, CardHeader, CardMedia, CardContent, Typography } from '@mui/material';

export default function CardBase({ cardData }) {

    // const [expanded, setExpanded] = React.useState(false);

    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };

    return (<Card>
        <CardHeader
            avatar={
                <Avatar aria-label="recipe">
                    R
                </Avatar>
            }
            // action={
            //     <IconButton aria-label="settings">
            //         <MoreVertIcon />
            //     </IconButton>
            // }
            title={cardData}
        />
        <CardMedia
            image="/static/images/cards/paella.jpg"
            title="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to cook together with your
                guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
        </CardContent>
        {/* <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
            <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </IconButton>
        </CardActions> */}
        {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
                </Typography>
            </CardContent>
        </Collapse> */}
    </Card>
    );
}