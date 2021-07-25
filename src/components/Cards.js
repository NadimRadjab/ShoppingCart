import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import styles from '../styles/CardStyles';

function Cards({ classes, price, img, name, about, addQuantiy, removeQuantity, quantity }) {

    const handleAddQuantity = () => {
        addQuantiy(name);
    }

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

                </CardContent>
            </CardActionArea>
            <CardActions>
                <Typography color="textSecondary" component="h3">
                    {price}
                </Typography>
                <Button onClick={handleAddQuantity} size="small" color="primary">
                    <ArrowUpwardIcon />
                </Button>
                <span>{quantity}</span>
                <Button onClick={() => removeQuantity(name)} size="small" color="primary">
                    <ArrowDownwardIcon />
                </Button>


            </CardActions>
        </Card>
    )

}
export default withStyles(styles)(Cards);
