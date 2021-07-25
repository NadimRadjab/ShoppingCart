import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles'
import styles from '../styles/CardStyles';

function Cards({ classes, price, img, name, about }) {

    return (
        <Card className={classes.root} >
            <CardActionArea>
                <img src={img} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography color="textSecondary" component="h3">
                        {about}
                    </Typography>
                    <Typography color="textSecondary" component="h3">
                        {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    About
                </Button>

            </CardActions>
        </Card>
    )

}
export default withStyles(styles)(Cards);
